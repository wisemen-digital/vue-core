import type {
  AcceptableValue,
} from 'reka-ui'

import type { FormElementProps } from '@/types/formElement.type'
import type { RadioGroupItem } from '@/types/radioGroup.type'
import type { Stylable } from '@/types/stylable.type'

export interface RadioGroupProps<TValue extends AcceptableValue> extends FormElementProps, Stylable<'radioGroup'> {
  items: RadioGroupItem<TValue extends Array<infer U> ? U : TValue>[]
}
