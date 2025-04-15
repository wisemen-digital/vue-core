<script setup lang="ts">
import SettingsSectionProvider from '@/modules/settings/parts/content/SettingsSectionProvider.vue'
import { useInjectSettingsContext } from '@/modules/settings/settings.context'

const { activeView } = useInjectSettingsContext()
</script>

<template>
  <SettingsSectionProvider
    v-for="section of activeView.sections"
    :key="section.title"
    :section="section"
  >
    <Component :is="section.component()" />

    <div
      class="
        px-4xl
        last:hidden
      "
    >
      <div class="bg-quaternary h-px w-full" />
    </div>
  </SettingsSectionProvider>
</template>
