import type { ComponentStyleConfigRegistry } from '@/types/style.type'

interface DefineStyleConfigOptions<TComponent extends keyof ComponentStyleConfigRegistry> {
  config: Partial<ComponentStyleConfigRegistry[TComponent]>
  layer?: string
  selector: string
  component: TComponent
}

export function defineStyleConfig<
  TComponent extends keyof ComponentStyleConfigRegistry,
>(
  options: DefineStyleConfigOptions<TComponent>,
): void {
  const inBrowser = typeof window !== 'undefined'

  if (!inBrowser) {
    return
  }

  const style = document.createElement('style')

  const layer = options.layer ?? 'component'

  const layerStyles = Object.entries(options.config)
    .map(([
      key,
      value,
    ]) => `${key}: ${value};`)
    .join(' ')

  style.appendChild(
    document.createTextNode(`@layer ${layer} { ${options.selector} { ${layerStyles} } }`),
  )

  document.head.appendChild(style)
}
