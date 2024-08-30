<script setup lang="ts">
import { AppText } from '@wisemen/vue-core'

const props = defineProps<{
  name: string
  invoices: {
    amount: number
    status: 'paid' | 'unpaid'
  }[]
}>()
</script>

<template>
  <div class="flex w-full flex-col gap-1.5">
    <div
      v-for="(invoice, i) in props.invoices"
      :key="i"
      class="w-full rounded-lg bg-gray-100 p-2"
    >
      <AppText variant="subtext">
        {{ `${props.name} ${invoice.status === 'paid' ? 'has paid' : 'has not paid'} their invoice with a value of ${invoice.amount}euros` }}
      </AppText>
    </div>
  </div>
</template>
