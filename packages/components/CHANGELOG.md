# Changelog

## [alpha.14]

### Features

- **Core Update**  
  - Update to Tailwind v4.  

- **VcConfigProvider**  
  - Add `areKeyboardShortcutHintsHidden` prop to toggle the display of keyboard shortcuts.  

### Breaking Changes

- **VcIconButton**  
  - Use a separate styling configuration from `VcButton`.  

- **VcIcon**  
  - Remove the `size` prop.  

---

## [alpha.13]

- Fix bugs.  

---

## [alpha.12]

- Fix bugs.  

---

## [alpha.11]

- Fix bugs.  

---

## [alpha.10]

### Breaking Changes

- **SSR Support**  
  - Export `setupDefaultStyles` for Server-Side Rendering (SSR) support.  
    - Execute this function in your project (`main.ts`) to ensure default styles work correctly.  

---

## [alpha.9]

### Breaking Changes

- **Component Prefix Update**  
  - Change the prefix for all components from `App` to `Vc`.  

- **Popover Prop Naming**  
  - Rename popover-related props to use the `popover-` prefix across all components (e.g., `Tooltip`, `Select`, `Popover`, `DropdownMenu`, etc.).  
    - Example: Rename `side` to `popover-side`.  

- **VcThemeProvider Changes**  
  - Update the `theme` prop values:  
    - Old values: `light | dark`.  
    - New value: `default`.  
  - Add the `isDarkmodeEnabled` prop to control dark mode activation.  

- **defineStyleConfig Changes**  
  - Rename `selector` to `variant` and provide type support for existing variants.  
  - Add a `colorScheme` prop, which accepts `light`, `dark`, or `*`.  
  - Add a `theme` prop, which accepts `default` or any string.  

- **i18n-iso-countries**  
  - Externalize this package, requiring manual installation in your project.  

---

## [alpha.8]

### Breaking Changes

- **UsePagination Updates**  
  - Rename `defaultPaginationOptions` to `options`.  
  - Allow `options` to support a function, enabling reactive pagination options.  
