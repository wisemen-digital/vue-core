<script setup lang="ts">
import {
  type DateValue,
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import {
  DateFieldInput,
  DateFieldRoot,
} from 'reka-ui'
import { ref } from 'vue'

import AppButton from '@/components/button/button/AppButton.vue'
import AppCalendar from '@/components/calendar/AppCalendar.vue'
import { injectConfigContext } from '@/components/config-provider/config.context'
import AppPopover from '@/components/popover/AppPopover.vue'
import AppPopoverAnchor from '@/components/popover/AppPopoverAnchor.vue'
import AppPopoverTrigger from '@/components/popover/AppPopoverTrigger.vue'

const globalConfigContext = injectConfigContext()

const model = ref<Date | null>(null)

const placeholder = ref<DateValue>(today(getLocalTimeZone()))
</script>

<template>
  <div>
    <AppPopover
      :is-arrow-hidden="true"
      :offset-in-px="4"
      :style-config="{
        '--popover-min-width-default': '350px',
        '--popover-max-width-default': '350px',
      }"
      popover-width="available-width"
      align="start"
    >
      <AppPopoverAnchor>
        <!-- @vue-expect-error TODO: fix this -->
        <DateFieldRoot
          v-slot="{ segments }"
          v-model:placeholder="placeholder"
          v-model="model"
          :locale="globalConfigContext.locale.value"
          class="rounded-lg border border-solid border-primary p-2 ring-brand-primary-500 duration-200 focus-within:ring-2"
        >
          <div class="flex">
            <template
              v-for="item in segments"
              :key="item.part"
            >
              <DateFieldInput
                v-if="item.part === 'literal'"
                :part="item.part"
                class="text-tertiary"
              >
                {{ item.value }}
              </DateFieldInput>

              <DateFieldInput
                v-else
                :part="item.part"
                class="rounded px-0.5 text-primary outline-none duration-200 focus:bg-quaternary data-[placeholder]:text-placeholder"
              >
                {{ item.value }}
              </DateFieldInput>
            </template>
          </div>
        </DateFieldRoot>
      </AppPopoverAnchor>

      <AppPopoverTrigger>
        <AppButton>
          Trigger
        </AppButton>
      </AppPopoverTrigger>

      <template #content>
        <AppCalendar v-model="model" />
      </template>
    </AppPopover>
  </div>
</template>
