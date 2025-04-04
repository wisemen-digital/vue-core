<script setup lang="ts">
import { VcCalendar } from '@wisemen/vue-core'
import { ref } from 'vue'

const model = ref<Date>(new Date())
</script>

<template>
  <div class="flex gap-4">
    <VcCalendar v-model="model">
      <template #date="{ date }">
        <div
          v-if="date.toLocaleDateString() === model.toLocaleDateString()"
          :class="{
            'bg-brand-solid': date.toLocaleDateString() === new Date().toLocaleDateString(),
            'bg-white': date.toLocaleDateString() !== new Date().toLocaleDateString(),
          }"
          class="absolute bottom-2 h-px w-4 rounded-full"
        />
      </template>
    </VcCalendar>
    <div>
      <p class="text-sm">
        Events happening on {{ model.toLocaleDateString() }}:
      </p>
      <div
        v-for="item in 3"
        :key="item"
        class="bg-secondary mb-2 h-20 w-full rounded-sm"
      />
    </div>
  </div>
</template>
