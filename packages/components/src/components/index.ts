import type { AutocompleteProps } from '@/components/autocomplete/autocomplete.props'
import type { ButtonProps } from '@/components/button/button/button.props'
import type { IconButtonProps } from '@/components/button/icon-button/iconButton.props'
import type { RouterLinkButtonProps } from '@/components/button/router-link-button/routerLinkButton.props'
import type { CheckboxProps } from '@/components/checkbox/checkbox.props'
import type { DialogProps } from '@/components/dialog/dialog.props'
import type { DrawerProps } from '@/components/drawer/drawer.props'
import type { DropdownMenuProps } from '@/components/dropdown-menu/dropdownMenu.props'
import type { TextFieldProps } from '@/components/input-field/text-field/textField.props'
import type { PopoverProps } from '@/components/popover/popover.props'
import type { SelectProps } from '@/components/select/select.props'
import type { SwitchProps } from '@/components/switch/switch.props'
import type { TableProps } from '@/components/table/table.props'
import type { TooltipProps } from '@/components/tooltip/tooltip.props'
import type {
  SelectValue,
} from '@/types'

export type VcAutocompleteProps<TValue extends SelectValue> = AutocompleteProps<TValue>
export type VcButtonProps = ButtonProps
export type VcCheckboxProps = CheckboxProps
export type VcDialogProps = DialogProps
export type VcDrawerProps = DrawerProps
export type VcDropdownMenuProps = DropdownMenuProps
export type VcIconButtonProps = IconButtonProps
export type VcPopoverProps = PopoverProps
export type VcRouterLinkButtonProps = RouterLinkButtonProps
export type VcSelectProps<TValue extends SelectValue> = SelectProps<TValue>
export type VcSwitchProps = SwitchProps
export type VcTableProps<TSchema, TFilters> = TableProps<TSchema, TFilters>
export type VcTextFieldProps = TextFieldProps
export type VcTooltipProps = TooltipProps

// Autocomplete
export { default as VcAddressAutocomplete } from '@/components/autocomplete/AddressAutocomplete.vue'
export { default as VcAutocomplete } from '@/components/autocomplete/Autocomplete.vue'

// Breadcrumbs
export { default as VcBreadcrumbs } from '@/components/breadcrumbs/Breadcrumbs.vue'

// Button
export { default as VcButton } from '@/components/button/button/Button.vue'

// Icon Button
export { default as VcIconButton } from '@/components/button/icon-button/IconButton.vue'

// Router Link Button
export { default as VcRouterLinkButton } from '@/components/button/router-link-button/RouterLinkButton.vue'

// Calendar
export { default as VcCalendar } from '@/components/calendar/Calendar.vue'

// Checkbox
export { default as VcCheckbox } from '@/components/checkbox/Checkbox.vue'
export { default as VcCheckboxGroup } from '@/components/checkbox/CheckboxGroup.vue'
export { default as VcCheckboxIndicator } from '@/components/checkbox/CheckboxIndicator.vue'

// Collapsable
export { default as VcCollapsable } from '@/components/collapsable/Collapsable.vue'
export { default as VcCollapsable2 } from '@/components/collapsable/Collapsable2.vue'

// Config Provider
export { default as VcConfigProvider } from '@/components/config-provider/ConfigProvider.vue'

// Dialog
export { default as VcDialog } from '@/components/dialog/Dialog.vue'
export { default as VcDialogCloseButton } from '@/components/dialog/DialogCloseButton.vue'
export { default as VcDialogContainer } from '@/components/dialog/DialogContainer.vue'
export { default as VcDialogDescription } from '@/components/dialog/DialogDescription.vue'
export { default as VcDialogTitle } from '@/components/dialog/DialogTitle.vue'

// Drawer
export { default as VcDrawer } from '@/components/drawer/Drawer.vue'
export { default as VcDrawerCloseButton } from '@/components/drawer/DrawerCloseButton.vue'
export { default as VcDrawerContainer } from '@/components/drawer/DrawerContainer.vue'
export { default as VcDrawerDescription } from '@/components/drawer/DrawerDescription.vue'
export { default as VcDrawerTitle } from '@/components/drawer/DrawerTitle.vue'

// Dropdown Menu
export { default as VcDropdownMenu } from '@/components/dropdown-menu/DropdownMenu.vue'
export { default as VcDropdownMenuTrigger } from '@/components/dropdown-menu/DropdownMenuTrigger.vue'
export { default as VcDropdownMenuGroup } from '@/components/dropdown-menu/items/DropdownMenuGroup.vue'
export { default as VcDropdownMenuOption } from '@/components/dropdown-menu/items/DropdownMenuOption.vue'
export { default as VcDropdownMenuSeparator } from '@/components/dropdown-menu/items/DropdownMenuSeparator.vue'
export { default as VcDropdownMenuSub } from '@/components/dropdown-menu/items/DropdownMenuSubTrigger.vue'

// Icon
export { default as VcAsyncIcon } from '@/components/icon/AsyncIcon.vue'
export { default as VcIcon } from '@/components/icon/Icon.vue'

// Input Fields
export { default as VcDateField } from '@/components/input-field/date-field/DateField.vue'
export { default as VcInputField } from '@/components/input-field/InputField.vue'
export { default as VcNumberField } from '@/components/input-field/number-field/NumberField.vue'
export { default as VcPasswordField } from '@/components/input-field/password-field/PasswordField.vue'
export { default as VcPhoneNumberField } from '@/components/input-field/phone-number-field/PhoneNumberField.vue'
export { default as VcTextarea } from '@/components/input-field/text-area/Textarea.vue'
export { default as VcTextField } from '@/components/input-field/text-field/TextField.vue'
export { default as VcTimeField } from '@/components/input-field/time-field/TimeField.vue'

// Input field error
export { default as VcInputFieldError } from '@/components/input-field-error/InputFieldError.vue'

// Input field hint
export { default as VcInputFieldHint } from '@/components/input-field-hint/InputFieldHint.vue'

// Input field label
export { default as VcInputFieldLabel } from '@/components/input-field-label/InputFieldLabel.vue'

// Keyboard
export { default as VcKeyboardKey } from '@/components/keyboard/KeyboardKey.vue'
export { default as VcKeyboardShortcut } from '@/components/keyboard/KeyboardShortcut.vue'
export { default as VcKeyboardShortcutProvider } from '@/components/keyboard/KeyboardShortcutProvider.vue'

// Popover
export { default as VcPopover } from '@/components/popover/Popover.vue'
export { default as VcPopoverAnchor } from '@/components/popover/PopoverAnchor.vue'
export { default as VcPopoverCloseButton } from '@/components/popover/PopoverCloseButton.vue'
export { default as VcPopoverTrigger } from '@/components/popover/PopoverTrigger.vue'

// Select
export { default as VcSelectGroup } from '@/components/select/blocks/items/SelectGroup.vue'
export { default as VcSelectOption } from '@/components/select/blocks/items/SelectOption.vue'
export { default as VcSelectOptionIndicator } from '@/components/select/blocks/items/SelectOptionIndicator.vue'
export { default as VcSelectSeparator } from '@/components/select/blocks/items/SelectSeparator.vue'
export { default as VcSelectEmpty } from '@/components/select/blocks/SelectEmpty.vue'
export { default as VcSelectFilter } from '@/components/select/blocks/SelectFilter.vue'
export { default as VcSelectList } from '@/components/select/blocks/SelectList.vue'
export { default as VcSelectPopover } from '@/components/select/blocks/SelectPopover.vue'
export { default as VcSelectRoot } from '@/components/select/blocks/SelectRoot.vue'
export { default as VcSelect } from '@/components/select/Select.vue'

// Skeleton
export { default as VcSkeletonItem } from '@/components/skeleton/SkeletonItem.vue'

// Spinner
export { default as VcSpinner } from '@/components/spinner/Spinner.vue'

// Switch
export { default as VcSwitch } from '@/components/switch/Switch.vue'

// RadioGroup
export { default as VcRadioGroup } from '@/components/radio-group/RadioGroup.vue'
export { default as VcRadioGroupItem } from '@/components/radio-group/RadioGroupItem.vue'
export { default as VcRadioGroupItemIndicator } from '@/components/radio-group/RadioGroupItemIndicator.vue'

// Table
export { default as VcTablePagination } from '@/components/table/pagination/TablePagination.vue'
export { default as VcTablePaginationFirstPage } from '@/components/table/pagination/TablePaginationFirstPage.vue'
export { default as VcTablePaginationLastPage } from '@/components/table/pagination/TablePaginationLastPage.vue'
export { default as VcTablePaginationNextPage } from '@/components/table/pagination/TablePaginationNextPage.vue'
export { default as VcTablePaginationPages } from '@/components/table/pagination/TablePaginationPages.vue'
export { default as VcTablePaginationPrevPage } from '@/components/table/pagination/TablePaginationPrevPage.vue'
export { default as VcTable } from '@/components/table/Table.vue'
export { default as VcTableCell } from '@/components/table/TableCell.vue'
export { default as VcTableHeaderCell } from '@/components/table/TableHeaderCell.vue'
export { default as VcTablePageCount } from '@/components/table/TablePageCount.vue'

// Tabs
export { default as VcRouteTabs } from '@/components/tabs/RouteTabs.vue'
export { default as VcTabs } from '@/components/tabs/Tabs.vue'
export { default as VcTabsContent } from '@/components/tabs/TabsContent.vue'

// Tag
export { default as VcTag } from '@/components/tag/Tag.vue'
export { default as VcTagRemoveButton } from '@/components/tag/TagRemoveButton.vue'

// Theme Provider
export { injectThemeProviderContext, provideThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
export { default as VcThemeProvider } from '@/components/theme-provider/ThemeProvider.vue'

// Toast
export { default as VcToastContainer } from '@/components/toast/ToastContainer.vue'

// Toggle
export { default as VcToggle } from '@/components/toggle/Toggle.vue'

// Tooltip
export { default as VcTooltip } from '@/components/tooltip/Tooltip.vue'
export { default as VcTooltipTrigger } from '@/components/tooltip/TooltipTrigger.vue'
