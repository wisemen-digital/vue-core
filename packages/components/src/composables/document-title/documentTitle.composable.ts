import type { Ref } from 'vue'
import {
  readonly,
  ref,
  watch,
} from 'vue'

interface UseDocumentTitleReturnType {
  title: Readonly<Ref<string>>
  set: (title: string) => void
  setTemplate: (newTemplate: string) => void
}

const template = ref<string>('{title}')

export function useDocumentTitle(): UseDocumentTitleReturnType {
  const documentTitle = ref<string>(document.title)

  function setDocumentTitle(title: string): void {
    documentTitle.value = title
  }

  function setTemplate(newTemplate: string): void {
    if (!newTemplate.includes('{title}')) {
      throw new Error('Template must include {title}')
    }

    template.value = newTemplate
  }

  watch(
    documentTitle,
    (documentTitle) => {
      document.title = template.value.replace('{title}', documentTitle)
    },
    {
      immediate: true,
    },
  )

  return {
    title: readonly(documentTitle),
    set: setDocumentTitle,
    setTemplate,
  }
}
