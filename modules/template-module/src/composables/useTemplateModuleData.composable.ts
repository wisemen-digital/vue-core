import { useTemplateModuleContext } from "../context/context"

export function useTemplateModuleData() {
  const context = useTemplateModuleContext()
  return context
}