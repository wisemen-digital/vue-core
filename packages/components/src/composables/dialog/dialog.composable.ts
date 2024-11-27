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

export const dialogs = ref<Dialog[]>([]) as Ref<Dialog[]>

export function useDialogContainer(): UseDialogContainerReturnType {
  return {
    dialogs,
  }
}

export function useDialog<TComponent extends Component>(
  options: UseDialogOptions<TComponent>,
): UseDialogReturnType<TComponent> {
  const dialogId = useId()

  function removeDialogFromContainer(id: string): void {
    dialogs.value = dialogs.value.filter((dialog) => dialog.id !== id)
  }

  async function openDialog(attrs: Attrs<TComponent> & { id?: string }): Promise<void> {
    const dialog = await createDialog(attrs, attrs.id ?? dialogId)

    if (dialog === null) {
      return
    }

    dialogs.value.push(dialog.value)

    setTimeout(() => {
      dialog.value.isOpen = true
    })
  }

  function closeDialog(id?: string): void {
    const idToUse = id ?? dialogId

    const dialog = dialogs.value.find((dialog) => dialog.id === idToUse) ?? null

    if (dialog === null) {
      return
    }

    dialog.isOpen = false

    setTimeout(() => {
      removeDialogFromContainer(idToUse)
    }, 500)
  }

  async function createDialog(attrs: Attrs<TComponent>, id: string): Promise<Ref<Dialog> | null> {
    const dialogWithSameId = dialogs.value.find((dialog) => dialog.id === id) ?? null

    if (dialogWithSameId !== null) {
      console.warn(`A dialog with the id ${id} already exists. Make sure to use a unique id.`)

      return null
    }

    const c = await options.component()

    const dialogComponent = computed<Component>(() => {
      return h(
        c.default as Component,
        reactive<Attrs<TComponent>>({
          ...attrs,
          id,
          shouldAnimateFromTrigger: options.shouldAnimateFromTrigger ?? false,
          onClose: () => {
            closeDialog(id)
          },
        }),
      )
    })

    return ref<Dialog>({
      id,
      isOpen: false,
      component: markRaw(dialogComponent),
    })
  }

  function getTriggerProps(id?: string): DialogTriggerProps {
    const idToUse = id ?? dialogId
    const isOpen = dialogs.value.some((dialog) => dialog.id === idToUse)

    return {
      'id': `dialog-${idToUse}`,
      'aria-expanded': isOpen,
      'aria-haspopup': 'dialog',
      'data-state': isOpen,
    }
  }

  return {
    close: closeDialog,
    getTriggerProps,
    open: openDialog as UseDialogReturnType<TComponent>['open'],
  }
}
