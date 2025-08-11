<script setup lang="ts">
import { TagsInputInput } from 'reka-ui'

import { mergeClasses } from '@/class-variant/customClassVariants'
import { useInjectTagsInputFieldContext } from '@/components/tags-input-field/tagsInputField.context'

const {
  classConfig,
  customClassConfig,
  placeholder,
  style,
  onBlur,
} = useInjectTagsInputFieldContext()
</script>

<template>
  <TagsInputInput
    :placeholder="placeholder"
    :class="style.input({
      class: mergeClasses(customClassConfig.root, classConfig?.root),
    })"

    @blur="onBlur"
  />
</template>
