import { describe, it, expect, beforeEach, afterEach, vi, type Mock } from 'vitest'
import { defineComponent, h as vueH, nextTick, ref, type Component, type DefineComponent, type ComputedRef, type VNode } from 'vue'
import { mount } from '@vue/test-utils'
import { useDialog, useDialogContainer, dialogs } from '@/composables/dialog/dialog.composable'
import type { Attrs, Dialog, UseDialogOptions } from '@/types/dialog.type'

vi.mock('reka-ui', () => ({
    useId: vi.fn(),
}))

import { useId as importedUseId } from 'reka-ui'
const useIdMock = importedUseId as Mock

const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {})

interface MockDialogComponentProps {
    id?: string
    message?: string
    onClose?: () => void
    isOpen?: boolean
}

const MockDialogComponent: DefineComponent<MockDialogComponentProps> = defineComponent({
    name: 'MockDialogComponent',
    props: {
        id: String,
        message: String,
        onClose: Function as import('vue').PropType<() => void>,
        isOpen: Boolean,
    },
    emits: ['close'], // Though not explicitly used in props for Attrs<T>, good for completeness
    setup(props) {
        return () =>
            vueH('div', { 'data-testid': 'mock-dialog', 'data-id': props.id, 'data-isopen': props.isOpen }, [
                vueH('p', props.message),
                vueH('button', { onClick: () => props.onClose?.() }, 'Close Me'),
            ])
    },
})

beforeEach(() => {
    dialogs.value = []
    useIdMock.mockReset()
    consoleWarnMock.mockClear()
    vi.useFakeTimers()
})

afterEach(() => {
    vi.runOnlyPendingTimers() // Ensure all timers are run
    vi.useRealTimers()
    vi.restoreAllMocks() // Restore all mocks
})

// --- Test Suite ---

describe('useDialogContainer', () => {
    it('should return the global dialogs ref', () => {
        const { dialogs: containerDialogs } = useDialogContainer()
        expect(containerDialogs).toBe(dialogs)
        expect(containerDialogs.value).toEqual([])
    })
})

describe('useDialog', () => {
    let idCounter = 0
    // const getMockId = () => `test-dialog-${idCounter++}` // Not used, but kept for reference

    beforeEach(() => {
        idCounter = 0
        useIdMock.mockImplementation(() => `mock-id-${idCounter++}`)
    })

    // Correctly type defaultOptions according to UseDialogOptions and how the composable uses it
    const defaultOptions: UseDialogOptions<typeof MockDialogComponent> = {
        component: async () => ({ default: MockDialogComponent as Component }), // Cast to Component as used in composable
    }

    it('should initialize with no dialogs', () => {
        expect(dialogs.value).toHaveLength(0)
    })

    describe('openDialog', () => {
        it('should add a dialog to the dialogs array and set isOpen to true after a delay', async () => {
            // Explicitly type useDialog if needed, though inference should work with typed defaultOptions
            const { open } = useDialog<typeof MockDialogComponent>(defaultOptions)
            const dialogMessage = 'Hello Dialog'
            const generatedId = `dialog-mock-id-0`

            expect(dialogs.value).toHaveLength(0)
            // Attrs<typeof MockDialogComponent> should correctly infer { message?: string, ... }
            await open({ message: dialogMessage })

            expect(dialogs.value).toHaveLength(1)
            const openedDialog = dialogs.value[0]! // Assert non-null
            expect(openedDialog.id).toBe(generatedId)
            expect(openedDialog.isOpen).toBe(false)
            expect(openedDialog.component).toBeDefined()

            vi.advanceTimersByTime(1) // For setTimeout in openDialog
            await nextTick()

            expect(openedDialog.isOpen).toBe(true)
        })

        it('should use provided id if available', async () => {
            const { open } = useDialog<typeof MockDialogComponent>(defaultOptions)
            const customId = 'my-custom-dialog-id'
            await open({ message: 'Custom ID test', id: customId })

            expect(dialogs.value).toHaveLength(1)
            expect(dialogs.value[0]!.id).toBe(customId)
        })

        it('should warn and not add a dialog if a dialog with the same id already exists', async () => {
            const { open } = useDialog<typeof MockDialogComponent>(defaultOptions)
            const fixedId = 'duplicate-id-test'
            // Mock useId to return a predictable ID for the first dialog if it doesn't take an id
            // useIdMock.mockReturnValueOnce(fixedId.replace('dialog-', '')) // Only if first open() doesn't pass id

            await open({ message: 'First Dialog', id: fixedId }) // First dialog uses fixedId
            expect(dialogs.value).toHaveLength(1)
            expect(consoleWarnMock).not.toHaveBeenCalled()

            const { open: openSecond } = useDialog<typeof MockDialogComponent>({ // New instance
                component: async () => ({ default: MockDialogComponent as Component }),
            })
            // This call will attempt to create a dialog with the same 'fixedId'
            await openSecond({ message: 'Second Dialog trying same ID', id: fixedId })

            expect(dialogs.value).toHaveLength(1)
            expect(consoleWarnMock).toHaveBeenCalledTimes(1)
            expect(consoleWarnMock).toHaveBeenCalledWith(
                `A dialog with the id ${fixedId} already exists. Make sure to use a unique id.`,
            )
        })

        it('should correctly pass attributes to the dialog component', async () => {
            const { open } = useDialog<typeof MockDialogComponent>(defaultOptions)
            const dialogMessage = 'Testing attributes'
            const generatedId = `dialog-mock-id-0`

            await open({ message: dialogMessage }) // ID will be generated
            vi.advanceTimersByTime(1)
            await nextTick()

            const wrapper = mount(defineComponent({
                setup() {
                    const { dialogs: currentDialogs } = useDialogContainer()
                    // Ensure component is a valid VNode or Component for h()
                    return () => vueH('div', currentDialogs.value.map(d => vueH(d.component as Component)))
                }
            }))

            const mockDialogInstance = wrapper.findComponent(MockDialogComponent)
            expect(mockDialogInstance.exists()).toBe(true)
            expect(mockDialogInstance.props('message')).toBe(dialogMessage)
            expect(mockDialogInstance.props('id')).toBe(generatedId) // The component internally receives the generated ID
        })

        it('should return early if createDialog returns null (e.g., duplicate ID)', async () => {
            const { open } = useDialog<typeof MockDialogComponent>(defaultOptions)
            const fixedId = 'existing-id'

            // Pre-populate dialogs with a simple dialog object
            dialogs.value.push({
                id: fixedId,
                isOpen: false,
                component: {} as ComputedRef<Component>, // Placeholder, actual component structure is complex
            })

            await open({ id: fixedId, message: "Trying to open duplicate"})

            expect(dialogs.value.length).toBe(1)
            expect(dialogs.value[0]!.isOpen).toBe(false)
            expect(consoleWarnMock).toHaveBeenCalledWith(
                `A dialog with the id ${fixedId} already exists. Make sure to use a unique id.`
            )
        });
    })

    describe('closeDialog', () => {
        it('should set isOpen to false and remove the dialog after a delay (default id)', async () => {
            const { open, close } = useDialog<typeof MockDialogComponent>(defaultOptions)
            const generatedId = `dialog-mock-id-0`

            await open({ message: 'To be closed' })
            vi.advanceTimersByTime(1)
            await nextTick()

            expect(dialogs.value).toHaveLength(1)
            const dialogToClose = dialogs.value[0]!
            expect(dialogToClose.id).toBe(generatedId)
            expect(dialogToClose.isOpen).toBe(true)

            close() // Uses default dialogId associated with this useDialog instance

            expect(dialogToClose.isOpen).toBe(false)
            expect(dialogs.value).toHaveLength(1) // Still there, removal is delayed

            vi.advanceTimersByTime(500) // for closeDialog's setTimeout
            await nextTick()

            expect(dialogs.value).toHaveLength(0)
        })

        it('should set isOpen to false and remove the dialog after a delay (provided id)', async () => {
            const { open, close } = useDialog<typeof MockDialogComponent>(defaultOptions)
            const customId = 'closable-custom-id'

            await open({ message: 'To be closed with custom id', id: customId })
            vi.advanceTimersByTime(1)
            await nextTick()

            expect(dialogs.value).toHaveLength(1)
            const dialogToClose = dialogs.value[0]!
            expect(dialogToClose.id).toBe(customId)
            expect(dialogToClose.isOpen).toBe(true)

            close(customId)

            expect(dialogToClose.isOpen).toBe(false)
            expect(dialogs.value).toHaveLength(1)

            vi.advanceTimersByTime(500)
            await nextTick()

            expect(dialogs.value).toHaveLength(0)
        })

        it('should do nothing if dialog to close is not found', () => {
            const { close } = useDialog<typeof MockDialogComponent>(defaultOptions)
            dialogs.value.push({
                id: 'some-other-dialog',
                isOpen: true,
                component: {} as ComputedRef<Component>, // Placeholder
            })

            close('non-existent-id')

            expect(dialogs.value).toHaveLength(1)
            expect(dialogs.value[0]!.isOpen).toBe(true)
        })

        it('should trigger onClose passed to the component when dialog component calls it', async () => {
            const { open } = useDialog<typeof MockDialogComponent>(defaultOptions)
            // const generatedId = `dialog-mock-id-0` // ID generated by this instance

            await open({ message: 'Test internal close' })
            vi.advanceTimersByTime(1)
            await nextTick()

            const wrapper = mount(defineComponent({
                setup() {
                    const { dialogs: currentDialogs } = useDialogContainer()
                    return () => vueH('div', currentDialogs.value.map(d => vueH(d.component as Component)))
                }
            }))

            const mockDialogWrapper = wrapper.findComponent(MockDialogComponent)
            expect(mockDialogWrapper.exists()).toBe(true)
            const dialogInstance = dialogs.value[0]!
            expect(dialogInstance.isOpen).toBe(true)

            await mockDialogWrapper.find('button').trigger('click') // This calls props.onClose()
            await nextTick()

            expect(dialogInstance.isOpen).toBe(false) // onClose from component triggers closeDialog

            vi.advanceTimersByTime(500)
            await nextTick()
            expect(dialogs.value).toHaveLength(0)
        })
    })

    describe('createDialog (tested indirectly via openDialog)', () => {
        it('should return null and warn if a dialog with the same ID already exists', async () => {
            const fixedId = 'create-duplicate-id'
            dialogs.value.push({
                id: fixedId,
                isOpen: false,
                component: {} as ComputedRef<Component>, // Placeholder
            })

            // This useDialog instance will generate its own ID based on useIdMock
            // To test createDialog directly for a duplicate ID, openDialog needs to be called with fixedId.
            const { open } = useDialog<typeof MockDialogComponent>(defaultOptions)
            await open({ message: 'Attempt create duplicate', id: fixedId }) // Force using fixedId

            expect(consoleWarnMock).toHaveBeenCalledWith(
                `A dialog with the id ${fixedId} already exists. Make sure to use a unique id.`,
            )
            expect(dialogs.value.filter(d => d.id === fixedId)).toHaveLength(1)
            expect(dialogs.value.length).toBe(1) // No new dialog added
        })

        it('should correctly create a dialog object with markRaw component', async () => {
            const { open } = useDialog<typeof MockDialogComponent>(defaultOptions);
            const dialogMessage = 'Component Test';
            const generatedId = `dialog-mock-id-0`;

            await open({ message: dialogMessage });

            expect(dialogs.value).toHaveLength(1);
            const createdDialog = dialogs.value[0]!;

            expect(createdDialog.id).toBe(generatedId);
            expect(createdDialog.isOpen).toBe(false); // Initially false before openDialog's setTimeout
            expect(createdDialog.component).toBeDefined();

            // createdDialog.component is a ComputedRef that is markRaw'd
            // Check if it's a computed ref (has 'effect' property)
            expect((createdDialog.component as any).effect).toBeDefined();
            // Check if the ComputedRef itself is marked raw
            expect((createdDialog.component as any).__v_skip).toBe(true);

            // Check if the value inside the computed ref is a VNode
            const componentVNode = (createdDialog.component as ComputedRef<VNode>).value;
            expect(componentVNode.__v_isVNode).toBe(true);

            // To ensure the underlying component is correct (already tested in 'should correctly pass attributes')
            const wrapper = mount(defineComponent({
                setup() {
                    // Ensure it's a renderable component
                    return () => vueH(createdDialog.component as Component);
                }
            }));
            expect(wrapper.findComponent(MockDialogComponent).exists()).toBe(true);
        });
    })

    describe('getTriggerProps', () => {
        it('should return correct props when dialog is closed (default id)', () => {
            const { getTriggerProps } = useDialog<typeof MockDialogComponent>(defaultOptions)
            const generatedId = `dialog-mock-id-0` // This instance's default dialogId

            const props = getTriggerProps()
            expect(props).toEqual({
                'id': generatedId,
                'aria-expanded': false,
                'aria-haspopup': 'dialog',
                'data-state': false, // Vue typically uses boolean for data attributes state
            })
        })

        it('should return correct props when dialog is closed (custom id)', () => {
            const { getTriggerProps } = useDialog<typeof MockDialogComponent>(defaultOptions)
            const customId = 'my-trigger-id'

            const props = getTriggerProps(customId)
            expect(props).toEqual({
                'id': customId,
                'aria-expanded': false,
                'aria-haspopup': 'dialog',
                'data-state': false,
            })
        })

        it('should return correct props when dialog is open', async () => {
            const { open, getTriggerProps } = useDialog<typeof MockDialogComponent>(defaultOptions)
            const generatedId = `dialog-mock-id-0`

            await open({ message: 'Trigger test' }) // Opens dialog with generatedId
            vi.advanceTimersByTime(1)
            await nextTick()

            const props = getTriggerProps() // Gets props for generatedId
            expect(props).toEqual({
                'id': generatedId,
                'aria-expanded': true,
                'aria-haspopup': 'dialog',
                'data-state': true,
            })
        })

        it('should return correct props when specific dialog (by custom id) is open', async () => {
            const { open, getTriggerProps } = useDialog<typeof MockDialogComponent>(defaultOptions)
            const customId = 'my-custom-open-id'

            await open({ message: 'Trigger test', id: customId }) // Open dialog with customId
            vi.advanceTimersByTime(1)
            await nextTick()

            const { getTriggerProps: getOtherTriggerProps } = useDialog<typeof MockDialogComponent>(defaultOptions) // Different instance

            const props = getTriggerProps(customId) // Check props for the opened customId dialog
            expect(props).toEqual({
                'id': customId,
                'aria-expanded': true,
                'aria-haspopup': 'dialog',
                'data-state': true,
            })

            const otherGeneratedId = `dialog-mock-id-1` // from useIdMock for getOtherTriggerProps
            const otherProps = getOtherTriggerProps('some-other-id-not-opened') // Check a non-opened dialog
            expect(otherProps['aria-expanded']).toBe(false)
            expect(otherProps['id']).toBe('some-other-id-not-opened')

            const propsForOtherDefault = getOtherTriggerProps() // for mock-id-1
            expect(propsForOtherDefault['id']).toBe(otherGeneratedId)
            expect(propsForOtherDefault['aria-expanded']).toBe(false)

        })
    })

    describe('onBeforeUnmount', () => {
        it('should call closeDialog when the host component unmounts', async () => {
            const composableInstance = ref<ReturnType<typeof useDialog<typeof MockDialogComponent>> | null>(null)
            const closeSpy = vi.fn()

            const TestComponent = defineComponent({
                setup() {
                    const dialogControls = useDialog<typeof MockDialogComponent>(defaultOptions)
                    // Spy on the close method of this specific instance
                    vi.spyOn(dialogControls, 'close').mockImplementation(closeSpy);
                    composableInstance.value = dialogControls
                    return () => vueH('div')
                },
            })

            const wrapper = mount(TestComponent)
            expect(composableInstance.value).not.toBeNull()
            const currentDialogId = (composableInstance.value as any).dialogId; // Access internal for test clarity if needed or use useIdMock value

            await composableInstance.value!.open({ message: 'Unmount test' })
            vi.advanceTimersByTime(1)
            await nextTick()

            // Find the dialog associated with this composable instance
            expect(dialogs.value.find(d => d.id === `dialog-mock-id-0`)?.isOpen).toBe(true)

            wrapper.unmount()
            await nextTick()

            expect(closeSpy).toHaveBeenCalledTimes(1)
            // Note: closeSpy is a mock, so it doesn't execute the original close logic (like removing from array)
            // The next test verifies the full effect.
        })

        it('should fully close the dialog on unmount (testing effect, not just spy)', async () => {
            let generatedIdForTest = '';
            const TestComponentWithDialog = defineComponent({
                setup() {
                    // This instance of useDialog will get 'mock-id-0' then 'mock-id-1' if called again
                    // We expect useId to be called once for this component instance.
                    // `useIdMock.mockImplementationOnce(...)` can be used if more precise control is needed per instance.
                    const { open } = useDialog<typeof MockDialogComponent>(defaultOptions)
                    generatedIdForTest = `dialog-${useIdMock.getMockImplementation()!()}` // Capture the ID it will use
                    useIdMock.mockClear(); // Clear for next potential useId call if any
                    idCounter = 0; useIdMock.mockImplementation(() => `mock-id-${idCounter++}`); // Reset counter for predictability

                    open({ message: 'Unmount removal test' })
                    return () => vueH('div', 'Test Component Content')
                },
            })

            // Manually set what the *next* call to useId inside TestComponentWithDialog's setup will be
            // Note: This is a bit tricky because useId is called *inside* setup.
            // The `generatedIdForTest` capture above is a pragmatic way for this specific test.
            // For more robust ID testing across multiple composable instances, ensure useIdMock provides unique IDs sequentially.
            useIdMock.mockImplementationOnce(() => 'unmount-id-for-this-test')
            const expectedDialogId = 'dialog-unmount-id-for-this-test'


            const wrapper = mount(TestComponentWithDialog)

            vi.advanceTimersByTime(1) // For openDialog's setTimeout
            await nextTick()

            expect(dialogs.value).toHaveLength(1)
            const dialogInstance = dialogs.value[0]!
            expect(dialogInstance.id).toBe(expectedDialogId)
            expect(dialogInstance.isOpen).toBe(true)

            wrapper.unmount()
            await nextTick() // Allow onBeforeUnmount to run

            // isOpen should be false immediately due to closeDialog being called
            // The dialog object reference might change if not careful, so find by ID
            const dialogAfterUnmount = dialogs.value.find(d => d.id === expectedDialogId)
            expect(dialogAfterUnmount?.isOpen).toBe(false)

            vi.advanceTimersByTime(500) // For closeDialog's removal setTimeout
            await nextTick()

            expect(dialogs.value.find(d => d.id === expectedDialogId)).toBeUndefined()
            expect(dialogs.value).toHaveLength(0)
        })
    })
})