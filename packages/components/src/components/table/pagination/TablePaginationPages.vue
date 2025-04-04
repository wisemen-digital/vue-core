<script setup lang="ts">
import {
  PaginationEllipsis,
  PaginationListItem,
} from 'reka-ui'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import Button from '@/components/button/button/Button.vue'

const props = defineProps<{
  /**
   * The items to render in the pagination.
   */
  items: ({
    type: 'ellipsis'
  } | {
    type: 'page'
    value: number
  })[]
}>()

defineSlots<{
  /**
   * Use this to render your own pagination controls.
   */
  item: ({ page }: { page: string }) => void
}>()

const { n } = useI18n()

const paginationListItemRef = ref<InstanceType<typeof PaginationListItem> | null>(null)
</script>

<template>
  <template v-for="(page, index) in props.items">
    <PaginationListItem
      v-if="page.type === 'page'"
      ref="paginationListItemRef"
      :key="index"
      :as-child="true"
      :value="page.value"
    >
      <slot
        :page="n(page.value)"
        name="item"
      >
        <Button
          variant="tertiary"
          size="sm"
          class="
            data-[selected]:bg-primary-hover
            data-[selected]:border-(--bg-primary-hover)
            min-w-9
          "
        >
          {{ n(page.value) }}
        </Button>
      </slot>
    </PaginationListItem>

    <PaginationEllipsis
      v-else
      :key="page.type"
      :index="index"
      class="text-tertiary"
    >
      &#8230;
    </PaginationEllipsis>
  </template>
</template>
