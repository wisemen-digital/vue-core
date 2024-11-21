import { setupDefaultButtonStyles } from '@/components/button/button/buttonStyle.config'
import { setupDefaultIconButtonStyles } from '@/components/button/icon-button/iconButtonStyle.config'
import { setupDefaultCheckboxStyles } from '@/components/checkbox/checkboxStyle.config'
import { setupDefaultDialogStyles } from '@/components/dialog/dialogStyle.config'
import { setupDefaultDrawerStyles } from '@/components/drawer/drawerStyle.config'
import { setupDefaultDropdownMenuStyles } from '@/components/dropdown-menu/dropdownMenuStyle.config'
import { setupDefaultIconStyles } from '@/components/icon/iconStyle.config'
import { setupDefaultTextareaStyles } from '@/components/input-field/text-area/textareaStyle.config'
import { setupDefaultTextFieldStyles } from '@/components/input-field/text-field/textFieldStyle.config'
import { setupDefaultInputFieldErrorStyles } from '@/components/input-field-error/inputFieldErrorStyle.config'
import { setupDefaultInputFieldHintStyles } from '@/components/input-field-hint/inputFieldHintStyle.config'
import { setupDefaultInputFieldLabelStyles } from '@/components/input-field-label/inputFieldLabelStyle.config'
import { setupDefaultPopoverStyles } from '@/components/popover/popoverStyle.config'
import { setupDefaultRadioGroupStyles } from '@/components/radio-group/radioGroupStyle.config'
import { setupDefaultSelectStyles } from '@/components/select/selectStyle.config'
import { setupDefaultSwitchStyles } from '@/components/switch/switchStyle.config'
import { setupDefaultTableStyles } from '@/components/table/tableStyle.config'
import { setupDefaultTabsStyles } from '@/components/tabs/tabsStyle.config'
import { setupDefaultTagStyles } from '@/components/tag/tagStyle.config'
import { setupDefaultTooltipStyles } from '@/components/tooltip/tooltipStyle.config'

export function setupDefaultStyles(): void {
  setupDefaultButtonStyles()
  setupDefaultIconButtonStyles()
  setupDefaultCheckboxStyles()
  setupDefaultDialogStyles()
  setupDefaultDrawerStyles()
  setupDefaultDropdownMenuStyles()
  setupDefaultIconStyles()
  setupDefaultInputFieldErrorStyles()
  setupDefaultInputFieldHintStyles()
  setupDefaultInputFieldLabelStyles()
  setupDefaultTextareaStyles()
  setupDefaultTextFieldStyles()
  setupDefaultPopoverStyles()
  setupDefaultSelectStyles()
  setupDefaultSwitchStyles()
  setupDefaultTableStyles()
  setupDefaultTabsStyles()
  setupDefaultTagStyles()
  setupDefaultTooltipStyles()
  setupDefaultRadioGroupStyles()
}
