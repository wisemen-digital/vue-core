import { useTemplateModuleContext } from 'src/context/context'

export function useTemplateModuleData() {
  const context = useTemplateModuleContext()

  return context
}
