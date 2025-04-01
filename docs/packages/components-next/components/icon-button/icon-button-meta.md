<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'classConfig',
    'description': '<p>The class configuration of the component.</p>\n',
    'type': '(ClassConfig<\'iconButton\'> & {}) | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'icon',
    'description': '<p>The icon to display inside the button.</p>\n',
    'type': 'keyof Icons',
    'required': true
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
    'description': '<p>Indicates whether the button is in a loading state. When true, interactions are disabled.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'label',
    'description': '<p>The label of the button used for screen readers.</p>\n',
    'type': 'string',
    'required': true
  },
  {
    'name': 'size',
    'description': '<p>Defines the button’s size.</p>\n',
    'type': '\'md\' | \'2xl\' | \'lg\' | \'sm\' | \'xl\'',
    'required': false,
    'default': '\'md\''
  },
  {
    'name': 'testId',
    'description': '<p>A unique identifier used for testing purposes. If set to <code>null</code>, no test ID will be applied.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'type',
    'description': '<p>Specifies the button’s type attribute.</p>\n',
    'type': '\'reset\' | \'submit\' | \'button\'',
    'required': false,
    'default': '\'button\''
  },
  {
    'name': 'variant',
    'description': '<p>Defines the visual style of the button.</p>\n',
    'type': '\'primary\' | \'destructive-primary\' | \'destructive-secondary\' | \'destructive-tertiary\' | \'secondary\' | \'tertiary\'',
    'required': false,
    'default': '\'primary\''
  }
]" />

<EmitsTable :data="[
  {
    'name': 'blur',
    'description': '',
    'type': '[e: FocusEvent]'
  },
  {
    'name': 'click',
    'description': '',
    'type': '[e: MouseEvent]'
  },
  {
    'name': 'focus',
    'description': '',
    'type': '[e: FocusEvent]'
  }
]" />
