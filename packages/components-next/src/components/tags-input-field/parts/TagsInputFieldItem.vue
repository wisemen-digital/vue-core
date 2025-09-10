<script setup lang="ts">
import {
  TagsInputItem as RekaTagsInputItem,
  TagsInputItemDelete as RekaTagsInputItemDelete,
  TagsInputItemText as RekaTagsInputItemText,
} from 'reka-ui'

import Badge from '@/components/badge/Badge.vue'
import Icon from '@/components/icon/Icon.vue'
import { useInjectTagsInputFieldContext } from '@/components/tags-input-field/tagsInputField.context'

const {
  classConfig,
  customClassConfig,
  modelValue,
} = useInjectTagsInputFieldContext()
</script>

<template>
  <RekaTagsInputItem
    v-for="item in modelValue"
    :key="item"
    :value="item"
    :as-child="true"
  >
    <Badge
      :class-config="{
        root: 'aria-[current=true]:bg-gray-100 aria-[current=true]:dark:bg-gray-700 rounded-sm data-[variant=outline]:!py-xxs data-[variant=outline]:!px-md data-[variant=outline]:!text-secondary data-[variant=outline]:!border-primary ',
        ...customClassConfig.tag,
        ...classConfig?.tag,
      }"
      color="gray"
      variant="outline"
    >
      <RekaTagsInputItemText />
      <template #right>
        <RekaTagsInputItemDelete>
          <Icon
            icon="close"
            class="size-4 text-placeholder"
          />
        </RekaTagsInputItemDelete>
      </template>
    </Badge>
  </RekaTagsInputItem>
</template>
