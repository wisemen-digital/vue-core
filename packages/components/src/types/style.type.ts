import type { ButtonStyleConfig } from '@/components/button/button/buttonStyle.config'
import type { IconButtonStyleConfig } from '@/components/button/icon-button/iconButtonStyle.config'
import type { CheckboxStyleConfig } from '@/components/checkbox/checkboxStyle.config'
import type { DialogStyleConfig } from '@/components/dialog/dialogStyle.config'
import type { DrawerStyleConfig } from '@/components/drawer/drawerStyle.config'
import type { DropdownMenuStyleConfig } from '@/components/dropdown-menu/dropdownMenuStyle.config'
import type { IconStyleConfig } from '@/components/icon/iconStyle.config'
import type { TextareaStyleConfig } from '@/components/input-field/text-area/textareaStyle.config'
import type { TextFieldStyleConfig } from '@/components/input-field/text-field/textFieldStyle.config'
import type { InputFieldErrorStyleConfig } from '@/components/input-field-error/inputFieldErrorStyle.config'
import type { InputFieldHintStyleConfig } from '@/components/input-field-hint/inputFieldHintStyle.config'
import type { InputFieldLabelStyleConfig } from '@/components/input-field-label/inputFieldLabelStyle.config'
import type { PopoverStyleConfig } from '@/components/popover/popoverStyle.config'
import type { RadioGroupItemStyleConfig } from '@/components/radio-group/radioGroupItemStyle.config'
import type {
  SelectOptionStyleConfig,
  SelectStyleConfig,
} from '@/components/select/selectStyle.config'
import type { SwitchStyleConfig } from '@/components/switch/switchStyle.config'
import type { TableStyleConfig } from '@/components/table/tableStyle.config'
import type { TabsStyleConfig } from '@/components/tabs/tabsStyle.config'
import type { TagStyleConfig } from '@/components/tag/tagStyle.config'
import type { TooltipStyleConfig } from '@/components/tooltip/tooltipStyle.config'

export interface BaseStyleConfig {
  [key: `--${string}`]: string
}

export interface ComponentStyleConfigRegistry {
  button: {
    config: ButtonStyleConfig
    variants: [
      'default',
      'primary',
      'secondary-color',
      'secondary-gray',
      'tertiary-color',
      'tertiary-gray',
      'destructive-primary',
      'destructive-secondary',
      'destructive-tertiary',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
    ]
  }
  checkbox: {
    config: CheckboxStyleConfig
    variants: ['default']
  }
  dialog: {
    config: DialogStyleConfig
    variants: ['default']
  }
  drawer: {
    config: DrawerStyleConfig
    variants: ['default']
  }
  dropdownMenu: {
    config: DropdownMenuStyleConfig
    variants: ['default']
  }
  icon: {
    config: IconStyleConfig
    variants: [
      'default',
      'xs',
      'lg',
      'sm',
      'xl',
      'full',
    ]
  }
  iconButton: {
    config: IconButtonStyleConfig
    variants: [
      'default',
      'sm',
      'lg',
      'xl',
      '2xl',
    ]
  }
  inputFieldError: {
    config: InputFieldErrorStyleConfig
    variants: ['default']
  }
  inputFieldHint: {
    config: InputFieldHintStyleConfig
    variants: ['default']
  }
  inputFieldLabel: {
    config: InputFieldLabelStyleConfig
    variants: ['default']
  }
  popover: {
    config: PopoverStyleConfig
    variants: ['default']
  }
  radioGroupItem: {
    config: RadioGroupItemStyleConfig
    variants: ['default']
  }
  select: {
    config: SelectStyleConfig
    variants: ['default']
  }
  selectOption: {
    config: SelectOptionStyleConfig
    variants: ['default']
  }
  switch: {
    config: SwitchStyleConfig
    variants: [
      'default',
      'sm',
      'md',
      'lg',
    ]
  }
  table: {
    config: TableStyleConfig
    variants: ['default', 'borderless']
  }
  tabs: {
    config: TabsStyleConfig
    variants: ['default']
  }
  tag: {
    config: TagStyleConfig
    variants: ['default']
  }
  textarea: {
    config: TextareaStyleConfig
    variants: ['default']
  }
  textField: {
    config: TextFieldStyleConfig
    variants: ['default']
  }
  tooltip: {
    config: TooltipStyleConfig
    variants: ['default']
  }
}

export type StyleConfig<K extends keyof ComponentStyleConfigRegistry> = Partial<ComponentStyleConfigRegistry[K]>
