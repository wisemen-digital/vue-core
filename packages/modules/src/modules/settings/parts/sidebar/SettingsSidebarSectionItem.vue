<script setup lang="ts">
import { ListboxItem } from 'reka-ui'

import TextHighlight from '@/modules/settings/components/TextHighlight.vue'
import type { SettingsSection } from '@/modules/settings/settings.type'

const props = defineProps<{
  section: SettingsSection
}>()
</script>

<template>
  <ListboxItem
    :as-child="true"
    :value="{
      type: 'section',
      id: props.section.id,
    }"
  >
    <li
      class="
        group/sidebar-item gap-x-lg py-xs px-md text-secondary flex
        cursor-pointer items-center rounded-lg duration-200 outline-none
        data-highlighted:bg-tertiary
        dark:data-[state=checked]:text-brand-100
        dark:data-[state=checked]:data-highlighted:brightness-90
        data-[state=checked]:bg-tertiary
        data-[state=checked]:data-highlighted:brightness-102
      "
    >
      <span
        class="
          text-sm font-medium duration-200
          group-data-[state=checked]/sidebar-item:font-semibold
        "
      >
        <TextHighlight :text="props.section.title" />
      </span>
    </li>
  </ListboxItem>
</template>
