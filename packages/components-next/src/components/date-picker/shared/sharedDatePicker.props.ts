import type { SharedDateProps } from '@/types/shareDateProps.type'
import type {
  InteractableElement,
  TestId,
} from '@/utils/props.util'

export interface SharedDatePickerProps extends TestId, InteractableElement, SharedDateProps {
  /**
   * Whether the calendar should focus on the selected day, today’s date,
   * or the first day of the month when mounted.
   * @default false
   */
  focusOnMount?: boolean
  /**
   * The accessible label for the date picker.
   */
  label: string
}
