<script setup lang="ts">
import '@/styles/index.scss'

import { ref } from 'vue'

import Button from '@/components/button/button/Button.vue'
import IconButton from '@/components/button/icon-button/IconButton.vue'
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import DialogContainer from '@/components/dialog/DialogContainer.vue'
import TimeField from '@/components/input-field/time-field/TimeField.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { useDialog } from '@/composables/index'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'
import type { SelectOption } from '@/types/select.type'

setupDefaultStyles()

const value = ref<null | string>(null)
const selectItems = ref<SelectOption<string>[]>([
  {
    type: 'option',
    value: 'le',
  },
  {
    type: 'option',
    value: 'Banana',
  },
  {
    type: 'option',
    value: 'Blueberry',
  },
])

const time = ref<null | string>(null)

/**
 * Probleem:
 *
 * In een config gebruik je soms variabelen van andere componenten.
 * Dit werkt niet tenzij je die class als sibling applied.
 * Logisch, omdat je je styles applied op die class en niet op root. Maar moet zo?
 */

const variants = [
  'default',
  'secondary',
  'secondary-color',
  'tertiary',
  'tertiary-color',
  'destructive-primary',
  'destructive-secondary',
  'destructive-tertiary',
] as const

const dialog = useDialog({
  shouldAnimateFromTrigger: true,
  component: () => import('./ExampleDialog.vue'),
})

const test = ref<null | string>(null)
</script>

<template>
  <ConfigProvider
    :pagination="{ limit: 30 }"
    google-maps-api-key="AIzaSyATX2fY3BZwaKeURsQhwpEVLmLRr27s4vw"
    locale="nl"
  >
    <ThemeProvider
      :is-dark-mode-enabled="true"
      theme="default"
      class="bg-primary"
    >
      <div
        class="grid grid-cols-2 p-8"
      >
        <IconButton
          :style-config="{
            '--button-icon-color-default': '#ff00ff',
          }"
          label="test"
          icon="translate"
          variant="tertiary"
        />

        test: {{ test }}
        <TimeField v-model="test" />
        <div>
          <Button
            v-bind="dialog.getTriggerProps('test1')"
            @click="dialog.open({
              id: 'test1',
            })"
          >
            Trigger A
          </Button>
        </div>

        <div>
          <Button
            v-bind="dialog.getTriggerProps('test2')"
            @click="dialog.open({
              id: 'test2',
            })"
          >
            Trigger B
          </Button>
        </div>
      </div>

      <DialogContainer />
    </ThemeProvider>
  </ConfigProvider>
</template>
