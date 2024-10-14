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

export type { Icon, Icons } from '@/icons/icons'
export { extendIcons } from '@/icons/icons'
export { defineStyleConfig } from '@/styling/defineStyleConfig'
export type {
  AcceptableValue,
} from '@/types/acceptableValue.type'
export type {
  SelectGroup,
  SelectItem,
  SelectOption,
  SelectSeparator,
  SelectValue,
} from '@/types/select.type'
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
