import { useId } from 'radix-vue'
import type {
  Component,
  Ref,
} from 'vue'
import {
  computed,
  h,
  markRaw,
  reactive,
  ref,
} from 'vue'

import type {
  Attrs,
  Dialog,
  UseDialogContainerReturnType,
  UseDialogOptions,
  UseDialogReturnType,
} from '../types/dialog.type'

const dialogs = ref<Dialog[]>([])

export function useDialogContainer(): UseDialogContainerReturnType {
  return {
    dialogs,
  }
}

export function useDialog<TComponent extends Record<string, unknown>>({
  animateFromTrigger = false,
  component,
}: UseDialogOptions<TComponent>): UseDialogReturnType<TComponent> {
  const triggerId = useId()

  function removeDialogFromContainer(): void {
    dialogs.value = dialogs.value.filter(dialog => dialog.id !== triggerId)
  }

  async function openDialog(attrs: Attrs<TComponent>): Promise<void> {
    const dialog = await createDialog(attrs)

    dialogs.value.push(dialog.value)

    setTimeout(() => {
      dialog.value.isOpen = true
    })
  }

  function closeDialog(): void {
    const dialog = dialogs.value.find(dialog => dialog.id === triggerId) ?? null

    if (dialog === null) {
      return
    }

    dialog.isOpen = false

    setTimeout(removeDialogFromContainer, 500)
  }

  async function createDialog(attrs: Attrs<TComponent>): Promise<Ref<Dialog>> {
    const dialogWithSameTriggerId = dialogs.value.find(dialog => dialog.id === triggerId) ?? null

    if (dialogWithSameTriggerId !== null) {
      throw new Error(`Dialog with triggerId ${triggerId} already exists`)
    }

    const c = await component()

    const dialogComponent = computed<Component>(() => {
      return h(
        c.default as Component,
        reactive<Attrs<TComponent>>({
          ...attrs,
          animateFromTrigger,
          onClose: () => {
            setTimeout(removeDialogFromContainer, 500)
          },
          triggerId,
        }),
      )
    })

    return ref<Dialog>({
      component: markRaw(dialogComponent),
      id: triggerId,
      isOpen: false,
    })
  }

  return {
    close: closeDialog,
    open: openDialog as UseDialogReturnType<TComponent>['open'],
    triggerId,
  }
}
