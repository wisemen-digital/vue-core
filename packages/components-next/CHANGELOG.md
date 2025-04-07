# @wisemen/vue-core-components

## 1.1.0

### Minor Changes

- 35f5093: Tabs: The `value` and `modelValue` now only accept strings.
- d022cb6: Select: Add `clearSearchTermOnBlur` prop to automatically clear the search term when the input loses focus or when the dropdown is closed.
- 9083be8: RadioGroupItem: Add `RadioGroupItemControl` component, which allows rendering the default radio indicator UI when overriding the default slot.
- b77cef6: Checkbox: Add `CheckboxControl` component, which allows rendering the default checkbox UI when overriding the default slot.
- 118ed63: Make `Spinner` component publicly available
- 3abffb3: ID attributes are now only exposed on form components; all other components will only provide a data-test-id.
  This change prevents issues where id attributes could interfere with accessibility features.

### Patch Changes

- 4200267: KeyboardShortcut: Add `classConfig` prop
- 6fdbb56: Autocomplete: Resolved an issue where the search term would be cleared unexpectedly
- 1445deb: Select: Closing the dropdown with `isDropdownHidden` now correctly triggers the blur event.
- a57ec4e: Select: Resolved an issue where v-model did not work correctly when using inline search.
- e8cb8ee:
  - Checkbox: added customization example
  - RadioGroupItem: added customization example
- ecfaf1f: Popover: Resolved an issue where using the native Teleport with the `Select` component could cause a maximum call stack error.
- ce7b72e: SelectItem: Now supports id and testId props for testability.
- 18aa794:
  - Checkbox: Improved pointer interaction by applying pointer-related classes directly to the root element.
  - RadioGroupItem: Improved pointer interaction by applying pointer-related classes directly to the root element.
- 03735a4: KeyboardKey: Changed width to min-width, allowing it to better accommodate larger content.
- f2e51b2: IconButton: Now uses width instead of min-width, making it easier to customize size using utilities like `size-4` instead of having to do `h-4 min-w-4`
- 3f3d5ee: Button: Resolved an issue where the IconRight would disappear during the loading state.
- f057323: Textarea: Resolved an issue where the height could render incorrectly in certain scenarios.
- 58b0592: DropdownMenu: fix arrow not being visible when side is set to `top` or `bottom`
- cdb6203: PrimitiveElement: Rename `test-id` attribute to `data-test-id`
- 3a1bacb: Resolved an issue where components with variants sharing the same name could unintentionally overwrite each other.

## 1.0.0

### Major Changes

- 7a2c19f: Replace `errors` array with `error-message` string
- 3d4e9bf: Add `popover-align-offset` and rename `popover-offset` to `popover-side-offset`

### Minor Changes

- 1d75b1e: Change item label font size in `DropdownMenu`
- cfa917f: Add form component error states documentation
- b637121: Add dialog examples to documentation
- f205a88: Improve popper origin transition
- 634ab4c: Add roving focus to `Select` tags
- 972f513: Export `Icon` component

### Patch Changes

- 2830b8e: Add `aria-hidden` to `Icon` component
- 8f1a2c0: Refine transition properties in `DialogContentTransition`
- 2b319f7: Externalize `motion-v` dependency
- 40e4f29: Fix transition origin in `DropdownMenu`
- 5c18ab9: Fix "No arrow" example in `Popover` docs
- 2e1c80a: Fix `isDestructive` icon color in `DropdownMenu`

