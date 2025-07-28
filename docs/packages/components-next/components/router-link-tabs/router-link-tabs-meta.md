<!-- This file was automatic generated. Do not edit it manually -->

<script setup>
import { createTabsStyle } from "@wisemen/vue-core-components";
</script>

<PropsTable :data="[
  {
    'name': 'classConfig',
    'description': '<p>The class configuration for the component. This allows customizating the default styles\nby overriding them with custom values.</p>\n',
    'type': 'ResolvedClassConfig<\'tabs\'> | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'orientation',
    'description': '<p>Defines the orientation of the tabs.</p>\n',
    'type': '\'vertical\' | \'horizontal\'',
    'required': false,
    'default': '\'horizontal\''
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
    'description': '<p>Defines the visual style of the tabs.</p>\n',
    'type': '\'button-border\' | \'button-brand\' | \'underline\'',
    'required': false,
    'default': '\'underline\''
  }
]" />

<ClassConfig :style-function="createTabsStyle" />
