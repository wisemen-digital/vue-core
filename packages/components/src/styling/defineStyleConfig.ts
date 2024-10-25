import type { ComponentStyleConfigRegistry } from '@/types/style.type'

interface DefineStyleConfigOptions<TComponent extends keyof ComponentStyleConfigRegistry> {
  config: Partial<ComponentStyleConfigRegistry[TComponent]>
  selector: string
  component: TComponent
}
export function defineStyleConfig<
  TComponent extends keyof ComponentStyleConfigRegistry,
>(
  options: DefineStyleConfigOptions<TComponent>,
): void {
  const style = document.createElement('style')

  style.type = 'text/css'

  Object.entries(options.config).forEach(([
    key,
    value,
  ]) => {
    style.appendChild(document.createTextNode(`${options.selector} { ${key}: ${value}; }`))
  })

  document.head.appendChild(style)
}
