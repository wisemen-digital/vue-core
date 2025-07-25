<!-- This file was automatic generated. Do not edit it manually -->

<script setup>
import { createBadgeStyle } from "@wisemen/vue-core-components";
</script>

<PropsTable :data="[
  {
    'name': 'classConfig',
    'description': '<p>The class configuration for the component. This allows customizating the default styles\nby overriding them with custom values.</p>\n',
    'type': 'ResolvedClassConfig<\'badge\'> | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'color',
    'description': '<p>The color of the badge.</p>\n',
    'type': '\'error\' | \'brand\' | \'gray\' | \'success\' | \'warning\'',
    'required': true
  },
  {
    'name': 'icon',
    'description': '<p>An icon to be displayed in the left side of badge.</p>\n',
    'type': 'keyof Icons | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'isRemovable',
    'description': '<p>If true, a button will be visible to remove the badge.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'size',
    'description': '<p>The size of the badge.</p>\n',
    'type': '\'lg\' | \'md\' | \'sm\'',
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
    'description': '<p>The visual style of the badge.</p>\n',
    'type': '\'outline\' | \'solid\' | \'translucent\'',
    'required': true
  }
]" />


<ClassConfig :style-function="createBadgeStyle" />

