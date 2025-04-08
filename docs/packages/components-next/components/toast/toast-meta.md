<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'actions',
    'description': '<p>One or more action buttons to display in the toast.</p>\n',
    'type': 'ToastAction[]',
    'required': false,
    'default': '[]'
  },
  {
    'name': 'description',
    'description': '<p>A description providing additional details.</p>\n',
    'type': 'string',
    'required': true
  },
  {
    'name': 'icon',
    'description': '<p>The icon to display in the toast.\nThis will be ignored if a <code>preview</code> is provided.\nIf left unset and no preview is given, a default icon based on <code>type</code> is shown.</p>\n',
    'type': 'keyof Icons | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'preview',
    'description': '<p>The preview to be displayed in the toast. If set, the icon will be replaced by this preview.</p>\n',
    'type': 'null | VNode<RendererNode, RendererElement, { [key: string]: any; }>',
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
    'name': 'title',
    'description': '<p>The main title of the toast.</p>\n',
    'type': 'string',
    'required': true
  },
  {
    'name': 'type',
    'description': '<p>The type of toast. This will determine the icon and color of the toast.</p>\n',
    'type': '\'error\' | \'info\' | \'success\'',
    'required': true
  }
]" />
