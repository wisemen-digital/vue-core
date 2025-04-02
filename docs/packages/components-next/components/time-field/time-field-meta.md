<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
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
    'type': '(ClassConfig<\'timeField\'> & {}) | null',
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
    'name': 'iconRight',
    'description': '<p>The icon displayed on the right side of the input. If set to null, no icon will be shown.</p>\n',
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

<EmitsTable :data="[
  {
    'name': 'blur',
    'description': '',
    'type': '[e: FocusEvent]'
  },
  {
    'name': 'focus',
    'description': '',
    'type': '[e: FocusEvent]'
  },
  {
    'name': 'update:modelValue',
    'description': '',
    'type': '[modelValue: string | null]'
  }
]" />

<SlotsTable :data="[
  {
    'name': 'segments',
    'description': '',
    'type': '{ part: SegmentPart; value: string; }[]'
  }
]" />
