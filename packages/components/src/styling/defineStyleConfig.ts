import type { ComponentStyleConfigRegistry } from '@/types/style.type'

interface DefineStyleConfigOptions<TComponent extends keyof ComponentStyleConfigRegistry> {
  config: Partial<ComponentStyleConfigRegistry[TComponent]>
  selector: ':root' | string & {}
  component: TComponent
}

export function defineStyleConfig<
  TComponent extends keyof ComponentStyleConfigRegistry,
>(
  options: DefineStyleConfigOptions<TComponent>,
): void {
  const styleSheet = new CSSStyleSheet()

  Object.entries(options.config).forEach(([
    key,
    value,
  ]) => {
    styleSheet.insertRule(`${options.selector} { ${key}: ${value}; }`)
  })

  document.adoptedStyleSheets = [
    ...document.adoptedStyleSheets,
    styleSheet,
  ]
}
