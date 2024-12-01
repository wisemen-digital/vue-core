# Changelog

## [alpha.14]

### Features

- **Core Update**  
  - Updated to Tailwind v4.

- **VcConfigProvider**  
  - Added `areKeyboardShortcutHintsHidden` prop to easily toggle the display of keyboard shortcuts.  

### Breaking Changes

- **VcIconButton**  
  - Now has a separate styling configuration from `VcButton`.  

- **VcIcon**  
  - Removed the `size` prop.

---


## [alpha.13]
- Bug fixes

---


## [alpha.12]
- Bug fixes

---


## [alpha.11]
- Bug fixes

---


## [alpha.10]

### Breaking Changes

- **SSR Support**  
  - Exported `setupDefaultStyles` for Server-Side Rendering (SSR) support.  
    - This function needs to be executed in your project (`main.ts`) to ensure the default styles work correctly.  

## [alpha.9]

### Breaking Changes

- **Component Prefix Update**  
  - The prefix for all components has been changed from `App` to `Vc`.  

- **Popover Prop Naming**  
  - Popover-related props have been renamed to use the `popover-` prefix across all components (e.g., `Tooltip`, `Select`, `Popover`, `DropdownMenu`, etc.).  
    - Example: `side` is now `popover-side`.  

- **VcThemeProvider Changes**  
  - The `theme` prop values have been updated:  
    - Previous values: `light | dark`  
    - New value: `default`  
  - Added a new prop: `isDarkmodeEnabled`, which controls dark mode activation.  

- **defineStyleConfig Changes**  
  - `selector` renamed to `variant`, now with type support for existing variants.  
  - Added a `colorScheme` prop, which accepts one of the following values: `light`, `dark`, or `*`.  
  - Added a `theme` prop, which accepts one of the following values: `default` or any string.  

- **i18n-iso-countries**  
  - This package is now externalized, requiring you to install it in your project manually.  

---

## [alpha.8]

### Breaking Changes

- **UsePagination Updates**  
  - `defaultPaginationOptions` renamed to `options`.  
  - `options` now supports a function, enabling reactive pagination options.  
