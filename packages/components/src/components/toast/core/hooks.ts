import {
  type Ref,
  ref,
  watchEffect,
} from 'vue'

export function useIsDocumentHidden(): { isDocumentHidden: Ref<boolean> } {
  const isDocumentHidden = ref<boolean>(false)

  watchEffect(() => {
    function callback(): void {
      isDocumentHidden.value = document.hidden
    }

    document.addEventListener('visibilitychange', callback)

    return (): void => window.removeEventListener('visibilitychange', callback)
  })

  return {
    isDocumentHidden,
  }
}
