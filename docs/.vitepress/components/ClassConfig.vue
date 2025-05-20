<script setup lang="ts">
import {
  VcConfigProvider,
  VcSelect,
  VcSelectItem,
  VcThemeProvider,
} from '@wisemen/vue-core-components'
import {
  computed,
  reactive,
  ref,
} from 'vue'

interface VariantModel {
  [key: string]: {
    options: string[]
    value: string
  }
}

interface Props<U extends (...args: any[]) => Record<string, string>> {
  styleFunction: U
}

const props = defineProps<Props<any>>()

const { variants } = props.styleFunction
const variantModels = reactive<VariantModel>({})

const style = computed<any>(() => {
  const activeVariants: Record<string, string> = {}

  for (const variantName in variantModels) {
    activeVariants[variantName] = variantModels[variantName].value
  }

  return props.styleFunction(activeVariants)
})

for (const variant in variants) {
  const options = Object.keys(variants[variant as keyof typeof variants])

  if (options.length === 0) {
    continue
  }
  
  variantModels[variant] = {
    value: options[0],
    options,
  }
}

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
</script>

<template>
  <VcConfigProvider locale="en-NL">
    <VcThemeProvider :appearance="isDark ? 'dark' : 'light'">
      <h2 id="default-styles">
        Default styles
      </h2>

      <template
        v-for="(variantModel, variantName) of variantModels"
        :key="variantName"
      >
        <VcSelect
          v-model="variantModel.value"
          :label="(variantName as unknown as string)"
          :display-fn="(value) => value"
          class="pb-4"
        >
          <VcSelectItem
            v-for="(option, index) of variantModel.options"
            :key="index"
            :value="option"
          >
            {{ option }}
          </VcSelectItem>
        </VcSelect>
      </template>

      <div
        class="
          border-secondary gap-x-2xl mt-3xl grid grid-cols-[1fr_2fr] max-h-[30rem]
          overflow-auto rounded-lg border border-solid
        "
      >
        <div class="bg-secondary col-span-full grid grid-cols-subgrid">
          <div class="p-lg text-primary min-w-32 text-sm font-semibold">
            Slot
          </div>
          <div class="p-lg text-primary text-sm font-semibold">
            Classes
          </div>
        </div>

        <div
          v-for="(slot, slotName) of style"
          :key="slotName"
          class="
            border-secondary py-md col-span-full grid grid-cols-subgrid
            items-start border-b text-sm
            last:border-none
          "
        >
          <div class="p-lg text-secondary truncate font-medium">
            {{ slotName }}
          </div>

          <div class="p-lg">
            <code>
              {{ slot() || '-' }}
            </code>
          </div>
        </div>
      </div>
    </VcThemeProvider>
  </VcConfigProvider>
</template>