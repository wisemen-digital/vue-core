import type { ComponentStyleConfigRegistry } from '@/types/style.type'

interface DefineStyleConfigOptions<TComponent extends keyof ComponentStyleConfigRegistry, TTheme extends '*' | 'default' | string & {}> {
  colorScheme: '*' | 'dark' | 'light'
  config: Partial<ComponentStyleConfigRegistry[TComponent]['config']>
  theme: TTheme
  variant: ComponentStyleConfigRegistry[TComponent]['variants'][number]
  component: TComponent
}

function camelCaseToKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export function defineStyleConfig<
  TComponent extends keyof ComponentStyleConfigRegistry,
  TTheme extends '*' | 'default' | string & {},
>(
  options: DefineStyleConfigOptions<TComponent, TTheme>,
): void {
  const inBrowser = typeof window !== 'undefined'

  if (!inBrowser) {
    return
  }

  const style = document.createElement('style')

  const layer = 'component'

  const layerStyles = Object.entries(options.config)
    .map(([
      key,
      value,
    ]) => `${key}: ${value};`)
    .join(' ')

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

  const selector = getSelector(
    camelCaseToKebabCase(options.component),
    options.variant,
    options.colorScheme,
    options.theme,
  )

  style.appendChild(
    document.createTextNode(`@layer ${layer} { ${selector} { ${layerStyles} } }`),
  )

  document.head.appendChild(style)
}
