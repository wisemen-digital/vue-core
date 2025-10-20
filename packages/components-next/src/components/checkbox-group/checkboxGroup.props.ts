import type { PublicProps } from '@/types/props.type'
import type {
  FormElement,
  InteractableElement,
  TestId,
} from '@/utils/props.util'

export interface CheckboxGroupProps extends TestId, InteractableElement, FormElement {}

export type CheckboxGroupPublicProps = PublicProps<CheckboxGroupProps>
