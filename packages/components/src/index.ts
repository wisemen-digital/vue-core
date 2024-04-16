import './styles/index.scss'

// Badge
export { default as AppBadge } from './components/badge/AppBadge.vue'

// Breadcrumbs
export { default as AppBreadcrumbs } from './components/breadcrumbs/AppBreadcrumbs.vue'

// Button
export type { AppButtonProps } from './components/button/AppButton.vue'
export { default as AppButton } from './components/button/AppButton.vue'
export { default as AppIconButton } from './components/button/AppIconButton.vue'
export { default as AppRouterLinkButton } from './components/button/AppRouterLinkButton.vue'
export * from './components/button/button.style'

// Checkbox
export { default as FormCheckbox } from './components/checkbox/FormCheckbox.vue'
export { default as FormCheckboxGroup } from './components/checkbox/FormCheckboxGroup.vue'

// Container
export { default as AppContainer } from './components/container/AppContainer.vue'

// Combobox
export { default as AppCombobox } from './components/combobox/AppCombobox.vue'
export { default as AppMultiCombobox } from './components/combobox/AppMultiCombobox.vue'
export { default as AppTagsCombobox } from './components/combobox/AppTagsCombobox.vue'
export { default as FormCombobox } from './components/combobox/FormCombobox.vue'
export { default as FormMultiCombobox } from './components/combobox/FormMultiCombobox.vue'
export { default as FormTagsCombobox } from './components/combobox/FormTagsCombobox.vue'

// Dialog
export { default as AppDialog } from './components/dialog/AppDialog.vue'
export { default as AppDialogCloseButton } from './components/dialog/AppDialogCloseButton.vue'
export { default as AppDialogContainer } from './components/dialog/AppDialogContainer.vue'
export { default as AppDialogDescription } from './components/dialog/AppDialogDescription.vue'
export { default as AppDialogTitle } from './components/dialog/AppDialogTitle.vue'

// Dropdown menu
export { default as AppDropdownMenu } from './components/dropdown-menu/AppDropdownMenu.vue'

// Form error
export { default as FormError } from './components/form-error/FormError.vue'

// Form Group
export { default as FormGroup } from './components/form-group/FormGroup.vue'

// Form input container
export { default as FormElement } from './components/form-element/FormElement.vue'

// Form label
export { default as FormLabel } from './components/form-label/FormLabel.vue'

// Icon
export { default as AppIcon } from './components/icon/AppIcon.vue'

// Input
export { default as AppInput } from './components/input/AppInput.vue'
export { default as AppNumberInput } from './components/input/AppNumberInput.vue'
export { default as FormInput } from './components/input/FormInput.vue'
export { default as FormNumberInput } from './components/input/FormNumberInput.vue'
export { default as FormPasswordInput } from './components/input/FormPasswordInput.vue'
export { default as FormPhoneNumberInput } from './components/input/FormPhoneNumberInput.vue'
export { default as AppTextarea } from './components/textarea/AppTextarea.vue'
export { default as FormTextarea } from './components/textarea/FormTextarea.vue'

// Keyboard
export { default as AppKeyboardCommand } from './components/keyboard/AppKeyboardCommand.vue'
export { default as AppKeyboardKey } from './components/keyboard/AppKeyboardKey.vue'

// Loader
export { default as AppLoader } from './components/loader/AppLoader.vue'

// Popover
export { default as AppPopover } from './components/popover/AppPopover.vue'

// Radio group
export { default as FormRadioGroup } from './components/radio-group/FormRadioGroup.vue'
export { default as FormRadioGroupIndicator } from './components/radio-group/FormRadioGroupIndicator.vue'
export { default as FormRadioGroupItem } from './components/radio-group/FormRadioGroupItem.vue'
export { default as FormRadioGroupRoot } from './components/radio-group/FormRadioGroupRoot.vue'

// Select
export { default as AppSelect } from './components/select/AppSelect.vue'
export { default as FormSelect } from './components/select/FormSelect.vue'

// Skeleton loader
export { default as AppPageSkeletonLoader } from './components/skeleton-loader/AppPageSkeletonLoader.vue'
export { default as AppSkeletonLoaderButton } from './components/skeleton-loader/AppSkeletonLoaderButton.vue'
export { default as AppSkeletonLoaderRow } from './components/skeleton-loader/AppSkeletonLoaderRow.vue'
export { default as AppSkeletonLoaderRows } from './components/skeleton-loader/AppSkeletonLoaderRows.vue'

// Switch
export { default as FormSwitch } from './components/switch/FormSwitch.vue'

// Table
export { default as AppTable } from './components/table/AppTable.vue'

// Tabs
export { default as AppRouteTabs } from './components/tabs/AppRouteTabs.vue'
export { default as AppTabs } from './components/tabs/AppTabs.vue'

// Tags input
export { default as AppTagsInput } from './components/tags-input/AppTagsInput.vue'
export { default as AppTagsInputItem } from './components/tags-input/AppTagsInputItem.vue'
export { default as FormTagsInput } from './components/tags-input/FormTagsInput.vue'

// Text
export { default as AppText } from './components/text/AppText.vue'
export * from './components/text/text.style'

// Toast
export { default as AppToastContainer } from './components/toast/AppToastContainer.vue'

// Toggle
export { default as AppToggle } from './components/toggle/AppToggle.vue'

// Tooltip
export { default as AppTooltip } from './components/tooltip/AppTooltip.vue'

// Composables
export { useDialog } from './composables/dialog.composable'
export { useKeyboardCommand } from './composables/keyboardCommand.composable'
export { useTablePagination } from './composables/tablePagination.composable'
export { useToast } from './composables/toast.composable'

// Types
export type { Icon, Icons } from './icons/icons'
export type { BreadcrumbItem } from './types/breadcrumbItem.type'
export type { ComboboxItem } from './types/comboboxItem.type'
export type { DropdownMenuItem } from './types/dropdownMenuItem.type'
export type { FormFieldErrors } from './types/formFieldErrors.type'
export type { KeyboardKey } from './types/keyboard.type'
export type { Routes } from './types/routes.type'
export type { SelectItem } from './types/selectItem.type'
export type { RouteTabItem, TabItem } from './types/tabItem.type'
export type {
  PaginatedData,
  Pagination,
  PaginationOptions,
  TableColumn,
  TableFilter,
} from './types/table.type'

// Other
export { extendIcons } from './icons/icons'
