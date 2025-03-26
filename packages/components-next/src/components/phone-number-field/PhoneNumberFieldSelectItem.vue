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

const contryCallingCode = computed<string>(() => getCountryCallingCode(props.value))
</script>

<template>
  <SelectItem :value="props.value">
    <div>
      <img
        v-if="countryFlagImageUrl !== null"
        :src="countryFlagImageUrl"
      >

      <span>
        {{ countryName ?? contryCallingCode }}
      </span>
    </div>
  </SelectItem>
</template>
