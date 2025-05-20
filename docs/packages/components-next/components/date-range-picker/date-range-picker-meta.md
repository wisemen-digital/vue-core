<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'allowDeselect',
    'description': '<p>Whether selecting an already selected date should deselect it.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'allowNonContinuousSelection',
    'description': '<p>When combined with isDateUnavailable, determines whether non-contiguous ranges,\ni.e. ranges containing unavailable dates, may be selected.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'classConfig',
    'description': '<p>The class configuration for the component. This allows customizating the default styles\nby overriding them with custom values.</p>\n',
    'type': 'ResolvedClassConfig<\'dateRangePicker\'> | null',
    'required': false
  },
  {
    'name': 'focusOnMount',
    'description': '<p>Whether the calendar should focus on the selected day, today’s date,\nor the first day of the month when mounted.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isDateDisabled',
    'description': '<p>A function to determine whether a specific date should be disabled.</p>\n<p>A date that is restricted by rules or settings, such as blackout dates, min/max date limits,\nor days that should never be selectable (e.g., weekends in a work calendar).\nThese dates are predefined as unselectable, regardless of external availability.</p>\n',
    'type': '((date: Date) => boolean)',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isDateUnavailable',
    'description': '<p>A function to determine whether a specific date is unavailable.</p>\n<p>A date that is not selectable because it is already booked, occupied, or reserved based on external data\n(e.g., a hotel booking system showing fully booked days). The user sees these dates but cannot pick them.</p>\n',
    'type': '((date: Date) => boolean)',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isDisabled',
    'description': '<p>Determines whether the element is disabled. When <code>true</code>, the element becomes non-interactive.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'label',
    'description': '<p>The accessible label for the date picker.</p>\n',
    'type': 'string',
    'required': true
  },
  {
    'name': 'maxDate',
    'description': '<p>The latest selectable date.</p>\n',
    'type': 'Date | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'minDate',
    'description': '<p>The earliest selectable date.</p>\n',
    'type': 'Date | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'showTwoMonths',
    'description': '<p>Whether the calendar should display two months instead of one.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'testId',
    'description': '<p>A unique identifier used for testing purposes. If set to <code>null</code>, no test ID will be applied.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'variant',
    'description': '<p>The visual style of the date range picker.</p>\n',
    'type': 'null',
    'required': false,
    'default': 'null'
  }
]" />
