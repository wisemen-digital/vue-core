<!-- This file was automatic generated. Do not edit it manually -->

<script setup>
import { createAvatarStyle } from "@wisemen/vue-core-components";
</script>

<PropsTable :data="[
  {
    'name': 'classConfig',
    'description': '<p>The class configuration for the component. This allows customizating the default styles\nby overriding them with custom values.</p>\n',
    'type': 'ResolvedClassConfig<\'avatar\'> | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'name',
    'description': '<p>The name of the user or entity represented by the avatar.\nThis is used for accessibility and as a fallback if no image is provided.</p>\n',
    'type': 'string',
    'required': true
  },
  {
    'name': 'src',
    'description': '<p>The URL of the image to be displayed as the avatar.</p>\n',
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
    'description': '<p>Defines the visual style of the avatar.</p>\n',
    'type': 'null',
    'required': false,
    'default': 'null'
  }
]" />

<ClassConfig :style-function="createAvatarStyle" />
