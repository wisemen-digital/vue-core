<script setup lang="ts">
interface Props {
  showNavigation?: boolean
  todayLabel?: string
  weekNumberLabel: string
  weekRangeLabel: string
}

withDefaults(defineProps<Props>(), {
  showNavigation: true,
  todayLabel: 'Today',
})

const emit = defineEmits<{
  goToToday: []
  nextWeek: []
  prevWeek: []
}>()
</script>

<template>
  <div class="flex items-center justify-between border-b border-gray-200 p-4">
    <div class="flex items-center gap-4">
      <div
        v-if="showNavigation"
        class="flex items-center gap-2"
      >
        <button
          class="
            rounded-md p-2 transition-colors
            hover:bg-gray-100
          "
          @click="emit('prevWeek')"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          class="
            rounded-md p-2 transition-colors
            hover:bg-gray-100
          "
          @click="emit('nextWeek')"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div class="text-lg font-semibold">
        {{ weekRangeLabel }}
      </div>

      <div class="text-sm text-gray-600">
        {{ weekNumberLabel }}
      </div>
    </div>

    <div class="flex items-center gap-4">
      <slot name="actions" />

      <button
        v-if="showNavigation"
        class="
          rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-700
          transition-colors
          hover:bg-blue-200
        "
        @click="emit('goToToday')"
      >
        {{ todayLabel }}
      </button>
    </div>
  </div>
</template>
