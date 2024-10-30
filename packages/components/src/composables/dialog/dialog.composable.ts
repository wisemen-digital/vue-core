import { useId } from 'reka-ui'
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
  DialogTriggerProps,
  UseDialogContainerReturnType,
  UseDialogOptions,
  UseDialogReturnType,
} from '@/types/dialog.type'

const dialogs = ref<Dialog[]>([])

export function useDialogContainer(): UseDialogContainerReturnType {
  return {
    dialogs,
  }
}

export function useDialog<TComponent extends Component>(
  options: UseDialogOptions<TComponent>,
): UseDialogReturnType<TComponent> {
  const triggerId = useId()

  function removeDialogFromContainer(): void {
    dialogs.value = dialogs.value.filter((dialog) => dialog.id !== triggerId)
  }

  async function openDialog(attrs: Attrs<TComponent>): Promise<void> {
    const dialog = await createDialog(attrs)

    if (dialog === null) {
      return
    }

    dialogs.value.push(dialog.value)

    setTimeout(() => {
      dialog.value.isOpen = true
    })
  }

  function closeDialog(): void {
    const dialog = dialogs.value.find((dialog) => dialog.id === triggerId) ?? null

    if (dialog === null) {
      return
    }

    dialog.isOpen = false

    setTimeout(removeDialogFromContainer, 500)
  }

  async function createDialog(attrs: Attrs<TComponent>): Promise<Ref<Dialog> | null> {
    const dialogWithSameTriggerId = dialogs.value.find((dialog) => dialog.id === triggerId) ?? null

    if (dialogWithSameTriggerId !== null) {
      return null
    }

    const c = await options.component()

    const dialogComponent = computed<Component>(() => {
      return h(
        c.default as Component,
        reactive<Attrs<TComponent>>({
          ...attrs,
          triggerId,
          shouldAnimateFromTrigger: options.shouldAnimateFromTrigger ?? false,
          onClose: () => {
            closeDialog()
          },
        }),
      )
    })

    return ref<Dialog>({
      id: triggerId,
      isOpen: false,
      component: markRaw(dialogComponent),
    })
  }

  const triggerProps = computed<DialogTriggerProps>(() => {
    const isOpen = dialogs.value.some((dialog) => dialog.id === triggerId)

    return {
      'id': triggerId,
      'aria-expanded': isOpen,
      'aria-haspopup': 'dialog',
      'data-state': isOpen,
    }
  })

  return {
    close: closeDialog,
    open: openDialog as UseDialogReturnType<TComponent>['open'],
    triggerProps,
  }
}
