<!-- This file was automatic generated. Do not edit it manually -->

<script setup>
import { createRouterLinkButtonStyle } from "@wisemen/vue-core-components";
</script>

<PropsTable :data="[
  {
    'name': 'classConfig',
    'description': '<p>The class configuration for the component. This allows customizating the default styles\nby overriding them with custom values.</p>\n',
    'type': 'ResolvedClassConfig<\'button\'> | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'iconLeft',
    'description': '<p>The icon displayed on the left side of the button text. If set to null, no left icon will be shown.</p>\n',
    'type': 'keyof Icons | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'iconRight',
    'description': '<p>The icon displayed on the right side of the button text. If set to null, no right icon will be shown.</p>\n',
    'type': 'keyof Icons | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'size',
    'description': '<p>Defines the button’s size.</p>\n',
    'type': '\'lg\' | \'md\' | \'sm\' | \'2xl\' | \'xl\'',
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
    'name': 'to',
    'description': '<p>The route to navigate to when the button is clicked.</p>\n',
    'type': 'any',
    'required': true
  },
  {
    'name': 'variant',
    'description': '<p>Defines the visual style of the button.</p>\n',
    'type': '\'primary\' | \'destructive-primary\' | \'destructive-secondary\' | \'destructive-tertiary\' | \'secondary\' | \'tertiary\'',
    'required': false,
    'default': '\'primary\''
  }
]" />


<ClassConfig :style-function="createRouterLinkButtonStyle" />

