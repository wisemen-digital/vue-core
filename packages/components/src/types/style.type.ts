import type { ButtonStyleConfig } from '@/components/button/buttonStyle.config'
import type { IconButtonStyleConfig } from '@/components/button/iconButtonStyle.config'
import type { IconStyleConfig } from '@/components/icon/iconStyle.config'
import type { InputFieldErrorStyleConfig } from '@/components/input-field-error/inputFieldErrorStyle.config'
import type {
  InputFieldHintStyleConfig,
} from '@/components/input-field-hint/inputFieldHintStyle.config'
import type { InputFieldLabelStyleConfig } from '@/components/input-field-label/inputFieldLabelStyle.config'
import type { PopoverStyleConfig } from '@/components/popover/popoverStyle.config'
import type { SelectStyleConfig } from '@/components/select/selectStyle.config'
import type { TextFieldStyleConfig } from '@/components/text-field/textFieldStyle.config'

export interface BaseStyleConfig {
  [key: `--${string}`]: string
}

export interface ComponentStyleConfigRegistry {
  button: ButtonStyleConfig
  icon: IconStyleConfig
  iconButton: IconButtonStyleConfig
  inputFieldError: InputFieldErrorStyleConfig
  inputFieldHint: InputFieldHintStyleConfig
  inputFieldLabel: InputFieldLabelStyleConfig
  popover: PopoverStyleConfig
  select: SelectStyleConfig
  textField: TextFieldStyleConfig
}

export type StyleConfig<K extends keyof ComponentStyleConfigRegistry> = Partial<ComponentStyleConfigRegistry[K]>
