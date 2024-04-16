import { ref, watchEffect } from 'vue'

export function useIsDocumentHidden() {
  const isDocumentHidden = ref<boolean>(false)

  watchEffect(() => {
    function callback(): void {
      isDocumentHidden.value = document.hidden
    }

    document.addEventListener('visibilitychange', callback)

    return () => window.removeEventListener('visibilitychange', callback)
  })

  return {
    isDocumentHidden,
  }
}
