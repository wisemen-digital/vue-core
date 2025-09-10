<script setup lang="ts">
import { ref } from 'vue'

import TagsInputField from '@/components/tags-input-field/TagsInputField.vue'

const modelValue = ref<string[]>([])
</script>

<template>
  <Story title="TagsInputField">
    <TagsInputField
      v-model="modelValue"
      :is-required="true"
      label="Users"
      placeholder="Add tags..."
      hint="Press enter to add a tag"
      class="w-100"
    />
  </Story>
</template>
