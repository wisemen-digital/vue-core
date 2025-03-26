# Changelog

# [1.0.0-alpha.41]

### Bug fixes
- **AddressAutocomplete**
  - Fix reactivity issue

# [1.0.0-alpha.33]

### Bug Fixes
- **InputFieldLabel**
  - Fix height animation bug

# [1.0.0-alpha.32]

### Bug Fixes
- **Tabs**
  - Fix slots `#item-left` and `#item-right` typing

# [1.0.0-alpha.31]

### Features
- **AnimateHeight**
  - Add new component to animate the height of its contents.

# [1.0.0-alpha.30]

### Bug Fixes
- **Tabs**
  - Fix `styleConfig` prop not working.

- **RouteTabs**
  - Fix `styleConfig` prop not working.

# [1.0.0-alpha.29]

### Bug Fixes
- **Autocomplete**
  - Blur the input field when clearing the search.

# [1.0.0-alpha.28]

### Bug Fixes
- **Select**
  - Fix `value` slot issue when an array value is used.

### Bug Fixes
- **Autocomplete**
  - Blur the input field when clearing the search.

# [1.0.0-alpha.27]

### Bug Fixes
- **Switch**
  - Fix styling issue.

# [1.0.0-alpha.26]

### Features
- **InputFieldLabel**
  - Add `--input-field-label-asterisk-color-default` to the style config to allow customizing the color of the asterisk.

### Bug Fixes
- **Autocomplete**
  - Fix `label` prop not working.

# [1.0.0-alpha.25]

### Bug Fixes
- **NumberField**
  - Fix bug where clearing the input would reset to the previous value, or default value if no value was set.

# [1.0.0-alpha.24]

# [1.0.0-alpha.23]

### Features
- **Autocomplete**
  - Various improvements

### Bug Fixes
- **DropdownMenu**
  - Fix dropdown menu sub content styling.

# [1.0.0-alpha.22]

# [1.0.0-alpha.21]

### Breaking Changes

- **useDocumentTitle**
  - Change `documentTitle.set` parameter from `string` to `MaybeRefOrGetter<string>`.

# [1.0.0-alpha.20]

# [1.0.0-alpha.19]

# [1.0.0-alpha.18]

# [1.0.0-alpha.17]

### Breaking Changes

- **VcPopover**
  - Change teleport target from `body` to `#teleport-target`. Make sure to render this element in your app, preferably within the first `VcThemeProvider` component in `App.vue`.

### Features

- **VcDateField**
  - Add new date field component.

- **VcThemeProvider**
  - Add `teleportTargetSelector` prop to allow customizing where elements such as tooltips and popovers are rendered. This prop defaults to `body`.

# [1.0.0-alpha.16]

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

### Bug Fixes

- **VcAutocomplete**
  - Fix `isDisabled` prop not working correctly.

# [1.0.0-alpha.15]

### Breaking Changes

- **VcTabs**
- **VcRouteTabs**
  - Tab items with a meta generic are no longer typed as `{ meta: TMeta }`. Instead, the properties from meta will now be directly available at the root level.

### Bug Fixes

- **VcDialog**
- **VcDrawer**
  - Fix `dialog.open` or `drawer.open` throwing an error when `id` is not provided.

- **VcDialog**
  - Fix the dialog transition ease.

- **VcSkeletonItem**
  - Fix the shimmer animation not working correctly.


# [1.0.0-alpha.14]

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


# [1.0.0-alpha.13]

- Fix bugs.  


# [1.0.0-alpha.12]

- Fix bugs.  


# [1.0.0-alpha.11]

- Fix bugs.  


# [1.0.0-alpha.10]

### Breaking Changes

- **SSR Support**  
  - Export `setupDefaultStyles` for Server-Side Rendering (SSR) support.  
    - Execute this function in your project (`main.ts`) to ensure default styles work correctly.  


# [1.0.0-alpha.9]

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


# [1.0.0-alpha.8]

### Breaking Changes

- **UsePagination Updates**  
  - Rename `defaultPaginationOptions` to `options`.  
  - Allow `options` to support a function, enabling reactive pagination options.  
