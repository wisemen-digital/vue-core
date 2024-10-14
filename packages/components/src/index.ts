import '@/styles/index.scss'
import '@/components/button/icon-button/iconButtonStyle.config'
import '@/components/input-field/text-field/textFieldStyle.config'
import '@/components/select/selectStyle.config'
import '@/components/popover/popoverStyle.config'
import '@/components/button/button/buttonStyle.config'
import '@/components/checkbox/checkboxStyle.config'
import '@/components/input-field-error/inputFieldErrorStyle.config'
import '@/components/input-field-hint/inputFieldHintStyle.config'
import '@/components/input-field-label/inputFieldLabelStyle.config'
import '@/components/tooltip/tooltipStyle.config'
import '@/components/tabs/tabsStyle.config'
import '@/components/dropdown-menu/dropdownMenuStyle.config'
import '@/components/icon/iconStyle.config'
import '@/components/tag/tagStyle.config'
import '@/components/switch/switchStyle.config'
import '@/components/table/tableStyle.config'

export { usePagination } from '@/composables/pagination.composable'
export type { Icon, Icons } from '@/icons/icons'
export { extendIcons } from '@/icons/icons'
export { defineStyleConfig } from '@/styling/defineStyleConfig'
export type {
  AcceptableValue,
} from '@/types/acceptableValue.type'
export type { PaginatedData, Pagination } from '@/types/pagination.type'
export type {
  SelectGroup,
  SelectItem,
  SelectOption,
  SelectSeparator,
  SelectValue,
} from '@/types/select.type'
export type { TableColumn } from '@/types/table.type'
export type { RouteTabItem, TabItem } from '@/types/tabs.type'

// Button
export { default as AppButton } from '@/components/button/button/AppButton.vue'
export { default as AppIconButton } from '@/components/button/icon-button/AppIconButton.vue'

// Icon
export { default as AppIcon } from '@/components/icon/AppIcon.vue'

// Input field
export { default as AppPasswordField } from '@/components/input-field/password-field/AppPasswordField.vue'
export { default as AppTextField } from '@/components/input-field/text-field/AppTextField.vue'

// Popover
export { default as AppPopover } from '@/components/popover/AppPopover.vue'
export { default as AppPopoverAnchor } from '@/components/popover/AppPopoverAnchor.vue'
export { default as AppPopoverCloseButton } from '@/components/popover/AppPopoverCloseButton.vue'
export { default as AppPopoverTrigger } from '@/components/popover/AppPopoverTrigger.vue'

// Switch
export { default as AppSwitch } from '@/components/switch/AppSwitch.vue'

// Select
export { default as AppSelect } from '@/components/select/AppSelect.vue'
export { default as AppSelectOption } from '@/components/select/items/AppSelectOption.vue'

// Spinner
export { default as AppSpinner } from '@/components/spinner/AppSpinner.vue'

// Tabs
export { default as AppRouteTabs } from '@/components/tabs/AppRouteTabs.vue'
export { default as AppTabs } from '@/components/tabs/AppTabs.vue'

// Tag
export { default as AppTag } from '@/components/tag/AppTag.vue'

// Toggle
export { default as AppToggle } from '@/components/toggle/AppToggle.vue'

// Tooltip
export { default as AppTooltip } from '@/components/tooltip/AppTooltip.vue'

// Collapse
export { default as AppCollapsable } from '@/components/collapsable/AppCollapsable.vue'
export { default as AppCollapsable2 } from '@/components/collapsable/AppCollapsable2.vue'

// Table
export { default as AppTable } from '@/components/table/AppTable.vue'
export { default as AppTableCell } from '@/components/table/AppTableCell.vue'
export { default as AppTableHeaderCell } from '@/components/table/AppTableHeaderCell.vue'
export { default as AppTablePageCount } from '@/components/table/AppTablePageCount.vue'
export { default as AppTablePagination } from '@/components/table/pagination/AppTablePagination.vue'
export { default as AppTablePaginationFirstPage } from '@/components/table/pagination/AppTablePaginationFirstPage.vue'
export { default as AppTablePaginationLastPage } from '@/components/table/pagination/AppTablePaginationLastPage.vue'
export { default as AppTablePaginationNextPage } from '@/components/table/pagination/AppTablePaginationNextPage.vue'
export { default as AppTablePaginationPages } from '@/components/table/pagination/AppTablePaginationPages.vue'
export { default as AppTablePaginationPrevPage } from '@/components/table/pagination/AppTablePaginationPrevPage.vue'

// Checkbox
export { default as AppCheckbox } from '@/components/checkbox/AppCheckbox.vue'
