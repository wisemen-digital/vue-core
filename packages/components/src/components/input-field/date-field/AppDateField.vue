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
import { injectConfigContext } from '@/components/config-provider/config.context.js'
import AppPopover from '@/components/popover/AppPopover.vue'
import AppPopoverAnchor from '@/components/popover/AppPopoverAnchor.vue'
import AppPopoverTrigger from '@/components/popover/AppPopoverTrigger.vue'

const globalConfigContext = injectConfigContext()

const model = ref<null | string>(null)

const placeholder = ref<DateValue>(today(getLocalTimeZone()))
</script>

<template>
  <AppPopover
    :is-arrow-hidden="true"
    :offset-in-px="4"
    popover-width="anchor-width"
  >
    <AppPopoverAnchor>
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
              class="text-placeholder"
            >
              {{ item.value }}
            </DateFieldInput>

            <DateFieldInput
              v-else
              :part="item.part"
              class="rounded px-1 text-secondary outline-none ring-brand-primary-500 duration-200 focus:ring-2 data-[placeholder]:text-placeholder"
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
      <!--  -->
    </template>
  </AppPopover>
</template>
