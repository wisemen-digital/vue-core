<script setup lang="ts">
import {
  type CountryCode,
  getCountryCallingCode,
} from 'libphonenumber-js'
import { computed } from 'vue'

import { injectConfigContext } from '@/components/config-provider/config.context'
import {
  getCountryFlagUrl,
  getCountryName,
} from '@/components/phone-number-field/phoneNumber.util'
import SelectItem from '@/components/select/parts/SelectItem.vue'

const props = defineProps<{
  value: CountryCode
}>()

const globalConfigContext = injectConfigContext()

const countryFlagImageUrl = computed<string | null>(() => getCountryFlagUrl(props.value))
const countryName = computed<string | null>(
  () => getCountryName(props.value, globalConfigContext.locale.value),
)

const countryCallingCode = computed<string>(() => getCountryCallingCode(props.value))
</script>

<template>
  <SelectItem :value="props.value">
    <div class="flex items-center gap-md">
      <div class="h-3 w-5 rounded-xxs overflow-hidden">
        <img
          v-if="countryFlagImageUrl !== null"
          :src="countryFlagImageUrl"
          class="object-cover size-full"
        >
      </div>

      <span>
        {{ countryName ?? countryCallingCode }}
      </span>
    </div>
  </SelectItem>
</template>
