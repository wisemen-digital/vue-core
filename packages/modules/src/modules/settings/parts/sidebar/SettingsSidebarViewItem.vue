<script setup lang="ts">
import { VcIcon } from '@wisemen/vue-core-components'
import { ListboxItem } from 'reka-ui'

import TextHighlight from '@/modules/settings/components/TextHighlight.vue'
import { useInjectSettingsContext } from '@/modules/settings/settings.context'
import type { SettingsView } from '@/modules/settings/types/settings.type'

const props = defineProps<{
  view: SettingsView
}>()

const { searchTerm } = useInjectSettingsContext()
</script>

<template>
  <ListboxItem
    :as-child="true"
    :value="props.view.id"
  >
    <li
      class="
        group/sidebar-item gap-x-lg p-xs text-secondary flex cursor-pointer
        items-center rounded-xl duration-200 outline-none
        data-highlighted:bg-tertiary
        data-[state=checked]:bg-brand-50 data-[state=checked]:text-brand-900
        data-[state=checked]:data-highlighted:brightness-102
        dark:data-[state=checked]:text-brand-100
        dark:data-[state=checked]:bg-brand-950
        dark:data-[state=checked]:data-highlighted:brightness-90
      "
    >
      <div
        class="
          p-md shrink-0 rounded-md duration-200
          group-data-[state=checked]/sidebar-item:bg-brand-100
          dark:group-data-[state=checked]/sidebar-item:bg-brand-900
        "
      >
        <VcIcon
          :icon="props.view.icon"
          class="size-3"
        />
      </div>

      <span
        class="
          text-sm font-medium duration-200
          group-data-[state=checked]/sidebar-item:font-semibold
        "
      >
        <TextHighlight
          :search-term="searchTerm"
          :text="props.view.title"
        />
      </span>
    </li>
  </ListboxItem>
</template>
