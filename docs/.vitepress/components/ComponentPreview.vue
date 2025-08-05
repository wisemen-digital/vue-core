<script setup lang="ts">
import {
  VcConfigProvider,
  VcDialogContainer,
  VcTabs,
  VcTabsContent,
  VcTabsItem,
  VcThemeProvider,
  VcToastContainer,
} from '@wisemen/vue-core-components'
import {
  computed,
  ref,
} from 'vue'

const props = defineProps<{
  name: string
  files?: string
}>()

type Tab = 'code' | 'preview'

const parsedFiles = computed<string[]>(() => JSON.parse(decodeURIComponent(props.files ?? '')))

const selectedTab = ref<Tab>('preview')
const selectedFileTab = ref<string>('Demo.vue')

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
  <div class="mt-2xl relative">
    <VcConfigProvider
      locale="en-NL"
      teleport-target-selector="#teleport-target"
      google-maps-api-key="AIzaSyATX2fY3BZwaKeURsQhwpEVLmLRr27s4vw"
    >
      <VcThemeProvider
        :appearance="isDark ? 'dark' : 'light'"
        class="vp-raw"
      >
        <VcTabs
          v-model="selectedTab"
          :class-config="{
            base: 'border-b border-secondary',
          }"
        >
          <template #items>
            <VcTabsItem value="preview">
              Preview
            </VcTabsItem>

            <VcTabsItem value="code">
              Code
            </VcTabsItem>
          </template>

          <template #content>
            <div class="mt-2xl">
              <VcTabsContent value="preview">
                <div
                  class="
                    vp-raw border-secondary bg-primary flex items-center
                    justify-center rounded-xl border border-solid p-20
                  "
                >
                  <slot />
                </div>
              </VcTabsContent>

              <VcTabsContent value="code">
                <VcTabs
                  v-model="selectedFileTab"
                  variant="button-brand"
                >
                  <template
                    v-if="parsedFiles.length > 1"
                    #items
                  >
                    <VcTabsItem
                      v-for="fileName of parsedFiles"
                      :key="fileName"
                      :value="fileName"
                    >
                      {{ fileName }}
                    </VcTabsItem>
                  </template>

                  <template #content>
                    <div
                      :class="{
                        'mt-2xl': parsedFiles.length > 1,
                      }"
                    >
                      <VcTabsContent
                        v-for="(fileName, fileIndex) of parsedFiles"
                        :key="fileName"
                        :value="fileName"
                      >
                        <div
                          class="
                            p-xl bg-secondary max-h-100 overflow-auto
                            rounded-2xl text-xs
                          "
                        >
                          <slot :name="fileIndex" />
                        </div>
                      </VcTabsContent>
                    </div>
                  </template>
                </VcTabs>
              </VcTabsContent>
            </div>
          </template>
        </VcTabs>

        <div id="teleport-target" />
        <VcDialogContainer />
        <VcToastContainer />
      </VcThemeProvider>
    </VcConfigProvider>
  </div>
</template>
