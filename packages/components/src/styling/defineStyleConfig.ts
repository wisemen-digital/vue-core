import type { ComponentStyleConfigRegistry } from '@/types/style.type'

interface DefineStyleConfigOptions<TComponent extends keyof ComponentStyleConfigRegistry, TTheme extends string & {} | '*' | 'default'> {
  colorScheme: '*' | 'dark' | 'light'
  config: Partial<ComponentStyleConfigRegistry[TComponent]['config']>
  theme: TTheme
  variant: string & {} | ComponentStyleConfigRegistry[TComponent]['variants'][number]
  component: TComponent
}

let onSsrCb: ((styleNode: string) => void) | null = null

export function setStyleConfigSsrCallback(callback: (styleNode: string) => void): void {
  onSsrCb = callback
}

function camelCaseToKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

function getSelector(
  componentName: string,
  variant: string,
  colorScheme: string,
  theme: string,
): string {
  let selector = `.${componentName}-${variant}`

  if (colorScheme !== '*') {
    selector = `${selector}.${colorScheme === 'dark' ? 'dark' : 'light'}`
  }

  if (theme !== '*') {
    selector = `${selector}.${theme}`
  }

  return selector
}

export function defineStyleConfig<
  TComponent extends keyof ComponentStyleConfigRegistry,
  TTheme extends string & {} | '*' | 'default',
>(
  options: DefineStyleConfigOptions<TComponent, TTheme>,
): void {
  const inBrowser = typeof window !== 'undefined'
  const layer = 'base'

  const layerStyles = Object.entries(options.config)
    .map(([
      key,
      value,
    ]) => `${key}: ${value};`)
    .join(' ')

  const selector = getSelector(
    camelCaseToKebabCase(options.component),
    options.variant,
    options.colorScheme,
    options.theme,
  )

  const styleNode = `@layer ${layer} { ${selector} { ${layerStyles} } }`

  if (!inBrowser) {
    onSsrCb?.(styleNode)

    return
  }

  const style = document.createElement('style')

  style.appendChild(
    document.createTextNode(styleNode),
  )

  document.head.appendChild(style)
}
