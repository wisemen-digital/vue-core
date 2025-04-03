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
    'name': 'autocomplete',
    'description': '<p>The autocomplete property of the input.</p>\n',
    'type': '\'off\' | \'on\'',
    'required': false,
    'default': '\'off\''
  },
  {
    'name': 'classConfig',
    'description': '<p>The class configuration of the component.</p>\n',
    'type': '(ClassConfig<\'dateField\'> & { datePicker?: ClassConfig<\'datePicker\'>; }) | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'errors',
    'description': '<p>The errors associated with the input.</p>\n',
    'type': 'string[]',
    'required': false,
    'default': '[]'
  },
  {
    'name': 'hideDatePicker',
    'description': '<p>Hides the date picker dropdown trigger when set to <code>true</code>.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'hint',
    'description': '<p>The hint text of the input.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'iconLeft',
    'description': '<p>The icon displayed on the left side of the input. If set to null, no icon will be shown.</p>\n',
    'type': 'keyof Icons | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'id',
    'description': '<p>The id of the element. If set to <code>null</code>, no ID will be applied.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
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
    'name': 'isLoading',
    'description': '<p>Whether the input is loading.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isRequired',
    'description': '<p>Whether the input is required.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isTouched',
    'description': '<p>Whether the input is touched. Used to determine if an error should be shown.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'label',
    'description': '<p>The label of the input.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
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
    'description': '',
    'type': 'null',
    'required': false,
    'default': 'null'
  }
]" />

<MethodsTable :data="[
  {
    'name': 'isDateDisabled',
    'description': '<p>A function to determine whether a specific date should be disabled.</p>\n<p>A date that is restricted by rules or settings, such as blackout dates, min/max date limits,\nor days that should never be selectable (e.g., weekends in a work calendar).\nThese dates are predefined as unselectable, regardless of external availability.</p>\n',
    'type': '(date: Date) => boolean'
  },
  {
    'name': 'isDateUnavailable',
    'description': '<p>A function to determine whether a specific date is unavailable.</p>\n<p>A date that is not selectable because it is already booked, occupied, or reserved based on external data\n(e.g., a hotel booking system showing fully booked days). The user sees these dates but cannot pick them.</p>\n',
    'type': '(date: Date) => boolean'
  }
]" />
