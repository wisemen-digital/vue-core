import type {
  InteractableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface SharedDatePickerProps extends PrimitiveElement, InteractableElement {
  /**
   * The latest selectable date.
   * @default null
   */
  maxDate?: Date | null
  /**
   * The earliest selectable date.
   * @default null
   */
  minDate?: Date | null
  /**
   * A function to determine whether a specific date should be disabled.
   *
   * A date that is restricted by rules or settings, such as blackout dates, min/max date limits,
   * or days that should never be selectable (e.g., weekends in a work calendar).
   * These dates are predefined as unselectable, regardless of external availability.
   *
   * @param date - The date to check.
   * @returns `true` if the date should be disabled, `false` otherwise.
   * @default () => false
   */
  isDateDisabled?: (date: Date) => boolean
  /**
   * A function to determine whether a specific date is unavailable.
   *
   * A date that is not selectable because it is already booked, occupied, or reserved based on external data
   * (e.g., a hotel booking system showing fully booked days). The user sees these dates but cannot pick them.
   *
   * @param date - The date to check.
   * @returns `true` if the date is unavailable, `false` otherwise.
   * @default () => false
   */
  isDateUnavailable?: (date: Date) => boolean
  /**
   * Whether selecting an already selected date should deselect it.
   * @default false
   */
  allowDeselect?: boolean
  /**
   * Whether the calendar should focus on the selected day, today's date,
   * or the first day of the month when mounted.
   * @default false
   */
  focusOnMount?: boolean
  /**
   * The accessible label for the date picker.
   */
  label: string
  /**
   * Whether the calendar should display two months instead of one.
   * @default false
   */
  showTwoMonths?: boolean
}
