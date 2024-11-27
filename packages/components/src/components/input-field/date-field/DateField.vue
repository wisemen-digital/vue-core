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

import Button from '@/components/button/button/Button.vue'
import Calendar from '@/components/calendar/Calendar.vue'
import { injectConfigContext } from '@/components/config-provider/config.context'
import Popover from '@/components/popover/Popover.vue'
import PopoverAnchor from '@/components/popover/PopoverAnchor.vue'
import PopoverTrigger from '@/components/popover/PopoverTrigger.vue'

const globalConfigContext = injectConfigContext()

const model = ref<Date | null>(null)

const placeholder = ref<DateValue>(today(getLocalTimeZone()))
</script>

<template>
  <div>
    <Popover
      :is-arrow-hidden="true"
      :offset-in-px="4"
      :style-config="{
        '--popover-min-width-default': '350px',
        '--popover-max-width-default': '350px',
      }"
      popover-width="available-width"
      align="start"
    >
      <PopoverAnchor>
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
      </PopoverAnchor>

      <PopoverTrigger>
        <Button>
          Trigger
        </Button>
      </PopoverTrigger>

      <template #content>
        <Calendar v-model="model" />
      </template>
    </Popover>
  </div>
</template>
