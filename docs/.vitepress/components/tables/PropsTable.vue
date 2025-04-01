<script setup lang="ts">
import { VcThemeProvider } from '@wisemen/vue-core-components'
import { ref } from 'vue'

interface PropDef {
  name?: string
  default?: boolean | string
  description?: string
  required?: boolean
  type: string
  typeSimple: string
}

interface PropsTableProps {
  data: PropDef[]
}

const props = defineProps<PropsTableProps>()

const isDark = ref<boolean>(document.documentElement.classList.contains('dark'))

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      const darkClass = document.documentElement.classList.contains('dark')

      if (darkClass !== isDark.value) {
        isDark.value = darkClass
      }
    }
  }
})

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: [
    'class',
  ],
})

// Sort by required and then alphabetically by name
function sortProps(props: PropDef[]): PropDef[] {
  return props.sort((a, b) => {
    if (a.required && !b.required) {
      return -1
    }
    else if (!a.required && b.required) {
      return 1
    }
    else if (a.name && b.name) {
      return a.name.localeCompare(b.name)
    }
    else {
      return 0
    }
  })
}
</script>

<template>
  <VcThemeProvider :appearance="isDark ? 'dark' : 'light'">
    <h2>
      Props
    </h2>

    <div class="grid grid-cols-[1fr_2fr_1fr] overflow-auto border border-solid border-secondary rounded-lg gap-x-2xl mt-3xl">
      <div class="col-span-full grid grid-cols-subgrid bg-secondary">
        <div class="p-lg text-primary font-semibold text-sm min-w-32">
          Prop
        </div>
        <div class="p-lg text-primary font-semibold text-sm">
          Description
        </div>

        <!-- <div class="p-lg text-primary font-semibold text-sm">
          Type
        </div> -->
        <div class="p-lg text-primary font-semibold text-sm">
          Default
        </div>
      </div>

      <div
        v-for="(prop, index) of sortProps(props.data)"
        :key="index"
        class="text-sm col-span-full grid grid-cols-subgrid border-b last:border-none border-secondary items-start py-md"
      >
        <div class="p-lg font-medium text-secondary truncate">
          {{ prop.name }} {{ prop.required ? '*' : '' }}
        </div>

        <div
          class="p-lg description"
          v-html="prop.description"
        />

        <!-- <div>
          <code class="break-words inline-flex whitespace-pre-wrap">
            <div
              v-if="!prop.type.startsWith('(') && !prop.type.startsWith('{')"
              class="break-words whitespace-break-spaces"
              v-html="formatTypeScriptCode(prop.type)"
            />

            <div v-else>-</div>
          </code>
        </div> -->

        <div class="p-lg">
          <code>
            {{ prop.default ?? '-' }}
          </code>
        </div>
      </div>
    </div>
  </VcThemeProvider>
</template>

<style>
.description p {
  margin: 0 !important;
}
</style>
