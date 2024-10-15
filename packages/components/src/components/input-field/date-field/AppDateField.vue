<script setup lang="ts">
import {
  DateFieldInput,
  DateFieldRoot,
} from 'reka-ui'

import { injectConfigContext } from '@/components/config-provider/config.context.js'

const globalConfigContext = injectConfigContext()
</script>

<template>
  <DateFieldRoot
    v-slot="{ segments }"
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
          class="text-secondary"
        >
          {{ item.value }}
        </DateFieldInput>

        <DateFieldInput
          v-else
          :part="item.part"
          class="rounded px-1 text-secondary outline-none ring-brand-primary-500 duration-200 focus:ring-2"
        >
          {{ item.value }}
        </DateFieldInput>
      </template>
    </div>
  </DateFieldRoot>
</template>
