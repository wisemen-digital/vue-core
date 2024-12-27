# Changelog

## [alpha.17]

### Breaking Changes

- **VcPopover**
  - Change teleport target from `body` to `#teleport-target`. Make sure to render this element in your app, preferably within the first `VcThemeProvider` component in `App.vue`.

### Features

- **VcDateField**
  - Add new date field component.

- **VcThemeProvider**
  - Add `teleportTargetSelector` prop to allow customizing where elements such as tooltips and popovers are rendered. This prop defaults to `body`.

## [alpha.16]

### Breaking Changes

- **VcSkeletonItem**
  - Rename `should-shimmer` prop to `shimmer`.

### Improvements

- **VcAutocomplete**
  - Improve internal logic to determine when to show the dropdown.

- **VcCheckbox**
  - Fix styling
  - Export `VcCheckboxIndicator` component

### Features

- **VcTimeField**
  - Add new time field component.

- **VcCheckboxGroup**
  - Add new checkbox group component.

- **VcAutocomplete**
  - Add `clearSearchOnSelection` prop.

### Bug fixes

- **VcAutocomplete**
  - Fix `isDisabled` prop not working correctly.

## [alpha.15]

### Breaking Changes

- **VcTabs**
- **VcRouteTabs**
  - Tab items with a meta generic are no longer typed as `{ meta: TMeta }`. Instead, the properties from meta will now be directly available at the root level.

### Bug fixes

- **VcDialog**
- **VcDrawer**
  - Fix `dialog.open` or `drawer.open` throwing an error when `id` is not provided.

- **VcDialog**
  - Fix the dialog transition ease.

- **VcSkeletonItem**
  - Fix the shimmer animation not working correctly.


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
