import type { ButtonStyleConfig } from '@/components/button/button/buttonStyle.config'
import type { IconButtonStyleConfig } from '@/components/button/icon-button/iconButtonStyle.config'
import type { CheckboxStyleConfig } from '@/components/checkbox/checkboxStyle.config'
import type { DropdownMenuStyleConfig } from '@/components/dropdown-menu/dropdownMenuStyle.config'
import type { IconStyleConfig } from '@/components/icon/iconStyle.config'
import type { TextFieldStyleConfig } from '@/components/input-field/text-field/textFieldStyle.config'
import type { InputFieldErrorStyleConfig } from '@/components/input-field-error/inputFieldErrorStyle.config'
import type {
  InputFieldHintStyleConfig,
} from '@/components/input-field-hint/inputFieldHintStyle.config'
import type { InputFieldLabelStyleConfig } from '@/components/input-field-label/inputFieldLabelStyle.config'
import type { PopoverStyleConfig } from '@/components/popover/popoverStyle.config'
import type { SelectStyleConfig } from '@/components/select/selectStyle.config'
import type { SwitchStyleConfig } from '@/components/switch/switchStyle.config'
import type { TabsStyleConfig } from '@/components/tabs/tabsStyle.config'
import type { TagStyleConfig } from '@/components/tag/tagStyle.config'
import type { TooltipStyleConfig } from '@/components/tooltip/tooltipStyle.config'

export interface BaseStyleConfig {
  [key: `--${string}`]: string
}

export interface ComponentStyleConfigRegistry {
  button: ButtonStyleConfig
  checkbox: CheckboxStyleConfig
  dropdownMenu: DropdownMenuStyleConfig
  icon: IconStyleConfig
  iconButton: IconButtonStyleConfig
  inputFieldError: InputFieldErrorStyleConfig
  inputFieldHint: InputFieldHintStyleConfig
  inputFieldLabel: InputFieldLabelStyleConfig
  popover: PopoverStyleConfig
  select: SelectStyleConfig
  switch: SwitchStyleConfig
  tabs: TabsStyleConfig
  tag: TagStyleConfig
  textField: TextFieldStyleConfig
  tooltip: TooltipStyleConfig
}

export type StyleConfig<K extends keyof ComponentStyleConfigRegistry> = Partial<ComponentStyleConfigRegistry[K]>
