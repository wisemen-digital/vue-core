<script setup lang="ts">
import { ListboxItemIndicator } from 'reka-ui'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { injectSelectContext } from '@/components/select/select.context'
import { selectStyle } from '@/components/select/select.style'
import { injectSelectOptionContext } from '@/components/select/selectOption.context'

const selectContext = injectSelectContext()
const selectOptionContext = injectSelectOptionContext()

const style = selectStyle()

const optionIndicatorClasses = computed<string>(() => style.optionIndicator())
</script>

<template>
  <template v-if="selectContext.isMultiple.value">
    <div
      v-if="!selectOptionContext.isSelected.value"
      class="rounded border border-solid border-primary"
    >
      <slot>
        <AppIcon
          :class="optionIndicatorClasses"
          icon="check"
          class="opacity-0"
        />
      </slot>
    </div>

    <ListboxItemIndicator class="rounded border border-solid border-brand-alt bg-brand-solid">
      <div>
        <slot>
          <AppIcon
            :class="optionIndicatorClasses"
            icon="check"
            class="scale-90 text-primary-on-brand"
          />
        </slot>
      </div>
    </ListboxItemIndicator>
  </template>

  <template v-else>
    <div
      v-if="!selectOptionContext.isSelected.value"
      class="opacity-0"
    >
      <slot>
        <AppIcon
          :class="optionIndicatorClasses"
          icon="check"
        />
      </slot>
    </div>

    <ListboxItemIndicator>
      <div>
        <slot>
          <AppIcon
            :class="optionIndicatorClasses"
            icon="check"
          />
        </slot>
      </div>
    </ListboxItemIndicator>
  </template>
</template>
