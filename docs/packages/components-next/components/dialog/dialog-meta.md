<!-- This file was automatic generated. Do not edit it manually -->

<script setup>
import { createDialogStyle } from "@wisemen/vue-core-components";
</script>

<PropsTable :data="[
  {
    'name': 'classConfig',
    'description': '<p>The class configuration for the component. This allows customizating the default styles\nby overriding them with custom values.</p>\n',
    'type': 'ResolvedClassConfig<\'dialog\'> | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'hideOverlay',
    'description': '<p>Whether to hide the overlay.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'preventClickOutside',
    'description': '<p>Prevent clicks outside the dialog content to close the dialog.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'preventEsc',
    'description': '<p>Prevent pressing the ESC key to close the dialog.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'teleportTargetId',
    'description': '<p>The ID of the element to teleport the dialog content to.\nBy default, the dialog content is teleported to the body.\nShould be without the leading <code>#</code>.</p>\n',
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
    'description': '<p>Defines the visual style of the dialog.</p>\n',
    'type': 'null',
    'required': false,
    'default': 'null'
  }
]" />

<ClassConfig :style-function="createDialogStyle" />
