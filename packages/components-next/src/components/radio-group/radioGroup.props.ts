import type { PublicProps } from '@/types/props.type'
import type {
  FormElement,
  InteractableElement,
  TestId,
} from '@/utils/props.util'

export interface RadioGroupProps extends TestId, InteractableElement, FormElement {}

export type RadioGroupPublicProps = PublicProps<RadioGroupProps>
