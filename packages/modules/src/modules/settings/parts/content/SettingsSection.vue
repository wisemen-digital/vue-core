<script setup lang="ts">
import { toValue } from 'vue'

import TextHighlight from '@/modules/settings/components/TextHighlight.vue'
import { useInjectSettingsSectionContext } from '@/modules/settings/settingsSection.context'

const props = withDefaults(defineProps<{
  isSingleColumnLayout?: boolean
}>(), { isSingleColumnLayout: false })

const { section } = useInjectSettingsSectionContext()
</script>

<template>
  <section
    :class="{
      '@6xl/settings:grid-cols-[1fr_1.5fr]': props.isSingleColumnLayout,
      '@2xl/settings:grid-cols-[1fr_1.5fr]': !props.isSingleColumnLayout,
    }"
    class="p-4xl gap-x-4xl gap-y-2xl grid"
  >
    <div>
      <!-- eslint-disable-next-line vuejs-accessibility/heading-has-content -->
      <h2 class="text-secondary text-sm font-semibold">
        <TextHighlight :text="toValue(section.title)" />
      </h2>

      <p class="text-tertiary mt-xs text-sm">
        <TextHighlight :text="toValue(section.description)" />
      </p>
    </div>

    <div>
      <slot />
    </div>
  </section>
</template>
