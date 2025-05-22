# @wisemen/vue-core-components

## 1.7.3

### ✨ Improvements

- **Table**: Exported internal component parts to allow more granular customization.
- **KeyboardShortcutProvider**: Now automatically disables shortcuts when any parent element has `aria-hidden`, improving accessibility behavior.

### 🐞 Bug Fixes

- **Table**: Fixed an issue in the calculation of the active filter count, ensuring accurate display.

## 1.7.2

### 🐞 Bug Fixes

- **DatePicker**, **DateRangePicker**: Fixed a reactivity issue that caused the placeholder value to not work correctly.

## 1.7.1

### ✨ Improvements

- **Table**: Added a background color to the empty and loading state.
- **Spinner**: Migrated styles to Tailwind, so there's no longer a need to import a separate stylesheet.

### 🐞 Bug Fixes

- **DatePicker**, **DateRangePicker**: Fixed an issue where the calendar incorrectly started on Tuesday instead of Monday.

## 1.7.0

### 🔥 New Features

- **Autocomplete**: Added an `items` slot to support more advanced customization.

### ✨ Improvements

- **DatePicker**, **DateRangePicker**: Now properly forward the `locale` prop for localized formats.

### 🐞 Bug Fixes

- **DateField**, **DateRangeField**: Fixed the `placeholderValue` prop to behave as expected.

## 1.6.0

### 🔥 New Features

- **Tabs**: Added horizontal scrolling with navigation arrows when content overflows.
- **Switch**: Introduced `iconChecked` and `iconUnchecked` props for customizing switch icons.

### ✨ Improvements

- **Select**:
  - Added a `badge` slot to allow custom badge implementations.
  - Truncated long values to prevent overflow.
- **PhoneNumberField**: Now sets `modelValue` to `null` when the input is empty.

### 🐞 Bug Fixes

- **Toast**: Fixed an issue where interacting with a toast while a dialog was open would unintentionally close the dialog.

## 1.5.6

### 🐞 Bug Fixes

- **build**: Fix issue with the latest deployment.

## 1.5.5

### ✨ Improvements

- **FormField**: Added an icon to error messages for improved visual feedback.
- **DateField**, **DateRangeField**: Updated `modelValue` to extend from `Date`, allowing for better type inference and consistency.
- **Table**: `TableHeaderCell` is now wrapped in a context provider, removing the need to manually pass the `column` prop.

## 1.5.4

### 🐞 Bug Fixes

- **Dialog**: Fixed a regression where `VcDialogTriggerProps` was no longer being exported.

## 1.5.3

### 🐞 Bug Fixes

- **Select**: Fixed an issue where opening the dropdown caused abrupt and incorrect scrolling.
- **Popper Components**: Ensured slot content is correctly wrapped in a `ThemeProvider` when rendered via a portal.

### ✨ Improvements

- **Select**: The `placeholder` is now fully customizable.

### ⚠️ Deprecations

- `useAppearance` has been deprecated.  
  → Please switch to using `useStorage` directly in your project.  
  This composable will be **removed in the next major release**.

## 1.5.2

### ✨ Improvements

- **TimeField**: Changed the `modelValue` type from `string` to a generic `T extends string` for improved flexibility.
- **TextField**: Prefixed component exports with `Vc` to maintain naming consistency.
- **Dialog**: Exported `VcDialogTriggerProps` type.

### 🐞 Bug Fixes

- **TextField**: Fixed issue where the input remained enabled even when `isDisabled` was set to `true`.

## 1.5.1

### 🐞 Bug Fixes

- Resolved an issue where styles were broken due to Tailwind not being properly imported.

## 1.5.0

### 🔥 New Features

- Introduced the `FileUpload` component for uploading files directly to S3.

### ✨ Improvements

- **Select**: Updated dropdown transitions to be smoother and less abrupt.
- **AddressAutocomplete**: Added support for `bus` prop.
- **Table**: Refined the empty state appearance by softening blur.
- Moved `vue-sonner` to dependencies to ensure type availability.

### 🐞 Bug Fixes

- **Select**: Fixed issue where `class-config` prop classes weren’t applied to `SelectPopover`.
- **AddressAutocomplete**: Resolved a delay where the selected value took longer than expected to appear.
- **Table**:
  - Fixed duplicate borders when content wasn’t scrollable.
  - Fixed missing borders when columns were sticky.
- **RouterLinkButton**: Resolved layout issues.

## 1.4.0

### 🔥 New Features

- Introduced the `Badge` component.
- Added a `DateRangePicker` component for selecting date intervals.
- Added a `DateRangeField` component for form-based date range input.

### ✨ Improvements

- **Dialog**: Exported the `DialogPortal` component.

### 🐞 Bug Fixes

- **Table**: Fixed accessibility issue by moving `aria-sort` to the correct column header.

---

## 1.3.1

### ✨ Improvements

- **Types**: Exported `AcceptableValue` for more flexible type support.

---

## 1.3.0

### 🔥 New Features

- Added a `Toast` component for temporary notifications such as success, error, or info messages.
- Introduced `PaginationParamsBuilder` utility for generating query parameters related to pagination.

### ✨ Improvements

- Internal types were refactored to support better customization of nested components.

### 🐞 Bug Fixes

- **Table**: Fixed issue where interactive elements in rows wouldn't function correctly when a row action was defined.

---

## 1.2.0

### 🔥 New Features

- Added a `Table` component for displaying structured data in rows and columns.

---

## 1.1.0

### 🔥 New Features

- **Tabs**: Restricted `value` and `modelValue` to accept only strings.
- **Select**: Introduced `clearSearchTermOnBlur` to reset the input automatically on blur.
- **RadioGroupItem**: Added `RadioGroupItemControl` for customizing the default indicator UI.
- **Checkbox**: Added `CheckboxControl` for customizing the default checkbox UI.
- Export the `Spinner` component.
- Reduced potential accessibility issues by limiting `id` attributes to form components only; others now use `data-test-id`.

### ✨ Improvements

- **KeyboardShortcut**: Added support for the `classConfig` prop.
- **SelectItem**: Now supports `id` and `testId` props for better testability.

### 🐞 Bug Fixes

- **Autocomplete**: Fixed issue where the search term cleared unexpectedly.
- **Select**:
  - Fixed issue where dropdown closure did not trigger blur.
  - Resolved `v-model` issues when using inline search.
- **Popover**: Prevented maximum call stack error when using native `Teleport` with `Select`.
- **Checkbox** & RadioGroupItem: Improved pointer interaction by applying pointer classes to the root element.
- **KeyboardKey**: Switched from `width` to `min-width` to accommodate wider content.
- **IconButton**: Replaced `min-width` with `width` for easier sizing.
- **Button**: Ensured `IconRight` remains visible during loading.
- **Textarea**: Fixed inconsistent height rendering in edge cases.
- **DropdownMenu**: Ensured arrow visibility when `side` is set to `top` or `bottom`.
- **PrimitiveElement**: Renamed `test-id` attribute to `data-test-id`.
- Resolved issues with components unintentionally overwriting each other when sharing the same variant name.

### ✨ Improvements

- Added customization examples for `Checkbox` and `RadioGroupItem`.

---

## 1.0.0

### 💥 Breaking Changes

- Replaced `errors` array with a single `error-message` string for simplified error handling.
- Renamed `popover-offset` to `popover-side-offset` and introduced `popover-align-offset`.

### ✨ Improvements

- **Dialog**: Refined transition properties.
- **Icon**: Added `aria-hidden` attribute.
- Updated font size for item labels in `DropdownMenu`.
- Improved popper origin transitions.
- Enabled roving focus for better accessibility in `Select` tags.
- Exported the `Icon` component for reuse.

### 📜 Documentation

- Added documentation for form component error states.
- Included usage examples for `Dialog` components.

### 🐞 Bug Fixes

- **DropdownMenu**: Fixed incorrect transition origin and destructive icon color.
- **Popover**: Fixed arrow visibility in documentation examples.
- Externalized `motion-v` dependency.
