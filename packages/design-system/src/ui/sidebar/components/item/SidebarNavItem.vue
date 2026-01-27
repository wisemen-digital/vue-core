<script setup lang="ts">
import { RouterLink } from 'vue-router'

import Interactable from '@/ui/interactable/Interactable.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import type { DashboardSidebarNavLink } from '@/ui/sidebar/types/sidebar.type'
import Text from '@/ui/text/Text.vue'

interface Props extends DashboardSidebarNavLink {}

const props = defineProps<Props>()
</script>

<template>
  <Interactable>
    <RouterLink
      v-slot="{ isActive }"
      :to="props.to"
      class="w-full"
    >
      <RowLayout
        :data-active="isActive || undefined"
        class="
          group/nav-item h-7 rounded-md px-lg
          data-active:bg-brand-primary
        "
      >
        <Component
          :is="props.icon"
          class="
            size-4 text-fg-tertiary duration-100
            group-hover/nav-item:text-fg-secondary
            group-data-active/nav-item:text-brand-secondary
            dark:group-data-active/nav-item:text-fg-primary
          "
        />

        <Text
          :text="props.label"
          class="
            text-xs font-medium text-secondary duration-100
            group-hover/nav-item:text-primary
            group-data-active/nav-item:text-brand-primary
          "
        />
      </RowLayout>
    </RouterLink>
  </Interactable>
</template>
