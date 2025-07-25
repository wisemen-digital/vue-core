import type {
  MaybeRefOrGetter,
  Ref,
} from 'vue'
import {
  readonly,
  ref,
  toValue,
  watch,
} from 'vue'

interface UseDocumentTitleReturnType {
  title: Readonly<Ref<string>>
  set: (title: MaybeRefOrGetter<string>) => void
  setTemplate: (newTemplate: string) => void
}

const template = ref<string>('{title}')

function setTemplate(newTemplate: string): void {
  if (!newTemplate.includes('{title}')) {
    throw new Error('Template must include {title}')
  }

  template.value = newTemplate
}

export function useDocumentTitle(): UseDocumentTitleReturnType {
  const documentTitle = ref<string>(document.title)

  function setDocumentTitle(title: MaybeRefOrGetter<string>): void {
    watch(() => toValue(title), (newTitle) => {
      documentTitle.value = newTitle
    }, {
      immediate: true,
    })
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
