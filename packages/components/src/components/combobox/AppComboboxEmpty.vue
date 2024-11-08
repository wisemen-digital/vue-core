<script setup lang="ts">
import { ComboboxEmpty } from 'radix-vue'
import { useI18n } from 'vue-i18n'

import AppText from '@/components/text/AppText.vue'

const props = defineProps<{
  emptyText: string | null
}>()

const { t } = useI18n()
</script>

<template>
  <ComboboxEmpty>
    <slot>
      <AppText
        variant="subtext"
        class="p-2"
      >
        {{ props.emptyText ?? t('components.combobox.empty') }}
      </AppText>
    </slot>
  </ComboboxEmpty>
</template>
