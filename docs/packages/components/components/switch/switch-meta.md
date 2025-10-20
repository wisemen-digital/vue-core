<!-- This file was automatic generated. Do not edit it manually -->

<script setup>
import { createFormFieldStyle } from "@wisemen/vue-core-components";
</script>

<PropsTable :data="[
  {
    'name': 'classConfig',
    'description': '<p>The class configuration for the component. This allows customizating the default styles\nby overriding them with custom values.</p>\n',
    'type': 'ResolvedClassConfig<\'switch\'> | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'errorMessage',
    'description': '<p>The error associated with the input.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'hint',
    'description': '<p>The hint text of the input.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'iconChecked',
    'description': '<p>The icon to be displayed when the switch is checked.</p>\n',
    'type': 'keyof Icons | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'iconUnchecked',
    'description': '<p>The icon to be displayed when the switch is unchecked.</p>\n',
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
    'name': 'size',
    'description': '<p>Defines the size of the switch.</p>\n',
    'type': '\'md\' | \'sm\'',
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
    'name': 'variant',
    'description': '<p>Defines the visual style of the switch.</p>\n',
    'type': 'null',
    'required': false,
    'default': 'null'
  }
]" />

<ClassConfig :style-function="createFormFieldStyle" />
