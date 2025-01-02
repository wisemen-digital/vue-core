import type { ComponentStyleConfigRegistry } from '@/types/style.type'

export type ColorScheme = '*' | 'dark' | 'light'

interface DefineStyleConfigOptions<TComponent extends keyof ComponentStyleConfigRegistry, TTheme extends string & {} | '*' | 'default'> {
  colorScheme: ColorScheme
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

function getComponentSelector({ componentName, variant }: { componentName: string, variant: string }): string {
  return `.${componentName}-${variant}`
}

function getSelector(
  componentName: string,
  variant: string,
  colorScheme: ColorScheme,
  theme: string,
): string {
  let selector = getComponentSelector({ componentName, variant })

  if (colorScheme !== '*') {
    selector = `${selector}.${colorScheme === 'dark' ? 'dark' : 'light'}`
  }

  if (theme !== '*') {
    selector = `${selector}.${theme}`
  }

  return selector
}

function getSystemStyleNode(payload: {
  colorScheme: ColorScheme
  componentName: string
  layerStyles: string
  theme: string
  variant:
  string
}): string {
  const {
    colorScheme,
    componentName,
    layerStyles,
    theme,
    variant,
  } = payload
  let selector = `${getComponentSelector({ componentName, variant })}.system`

  if (theme !== '*') {
    selector = `${selector}.${theme}`
  }

  if (colorScheme === 'dark') {
    /**
     * The double selector increases specificity to override the light styles in system mode
     * E.g. defineConfig a dark mode and a light mode style, 2 style sheets are generated
     * System prefers-color-scheme dark should win over system non-dark
     */
    return `
    ${selector}${selector} { 
      @media (prefers-color-scheme: dark) {
        ${layerStyles} 
      }
    }`
  }

  return `
    ${selector} { 
      ${layerStyles} 
    }
  }`
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

  const systemStyleNode = getSystemStyleNode({
    colorScheme: options.colorScheme,
    componentName: camelCaseToKebabCase(options.component),
    layerStyles,
    theme: options.theme,
    variant: options.variant,
  })

  const styleNode = `@layer ${layer} {
      ${selector} { 
        ${layerStyles} 
      }
      ${systemStyleNode}
  `

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
