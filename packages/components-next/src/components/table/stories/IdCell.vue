<script setup lang="ts">
import TableCell from '@/components/table/parts/TableCell.vue'
import TableInteractiveElement from '@/components/table/parts/TableInteractiveElement.vue'

const props = defineProps<{
  id: string
}>()
</script>

<template>
  <TableCell
    :is-primary-cell="true"
    :is-interactive="false"
  >
    <TableInteractiveElement>
      <button
        class="cursor-not-allowed"
        @click="console.log('click')"
      >
        {{ props.id }}
      </button>
    </TableInteractiveElement>
  </TableCell>
</template>
