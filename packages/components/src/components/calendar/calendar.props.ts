export interface CalendarProps {
  /**
   * The default placeholder date of the calendar. Will only be used when `modelValue` is `null`.
   * @default current date
   */
  defaultPlaceholderDate?: Date
  /**
   * A function that returns whether or not a date is disabled.
   * @default () => false
   */
  isDateDisabled?: (date: Date) => boolean
  /**
   * Whether the year arrows should be hidden.
   * @default false
   */
  areYearArrowsHidden?: boolean
}
