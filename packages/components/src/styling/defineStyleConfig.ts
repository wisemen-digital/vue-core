import type { ComponentStyleConfigRegistry } from '@/types/style.type'

interface DefineStyleConfigOptions<TComponent extends keyof ComponentStyleConfigRegistry> {
  config: Partial<ComponentStyleConfigRegistry[TComponent]>
  selector: ':root' | string & {}
  component: TComponent
}

// export function defineStyleConfig<
//   TComponent extends keyof ComponentStyleConfigRegistry,
// >(
//   options: DefineStyleConfigOptions<TComponent>,
// ): void {
//   const styleSheet = new CSSStyleSheet()

//   Object.entries(options.config).forEach(([
//     key,
//     value,
//   ]) => {
//     styleSheet.insertRule(`${options.selector} { ${key}: ${value}; }`)
//   })

//   console.log(styleSheet)

//   document.adoptedStyleSheets = [
//     ...document.adoptedStyleSheets,
//     styleSheet,
//   ]
// }

export function defineStyleConfig<
  TComponent extends keyof ComponentStyleConfigRegistry,
>(
  options: DefineStyleConfigOptions<TComponent>,
): void {
  // const root = document.documentElement

  // Object.entries(options.config).forEach(([
  //   key,
  //   value,
  // ]) => {
  //   root.style.setProperty(options.selector === ':root' ? key : `${options.selector} ${key}`, value as string) // Ensure value is a string for CSS variables
  // })

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
