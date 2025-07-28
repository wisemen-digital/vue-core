<script setup lang="ts">
import { ListboxItemIndicator } from 'reka-ui'
import { computed } from 'vue'

import Icon from '@/components/icon/Icon.vue'
import { injectSelectContext } from '@/components/select/select.context'
import { useSelectStyle } from '@/components/select/select.style'
import { injectSelectOptionContext } from '@/components/select/selectOption.context'

const selectContext = injectSelectContext()
const selectOptionContext = injectSelectOptionContext()

const selectStyle = useSelectStyle()

const optionIndicatorClasses = computed<string>(() => selectStyle.optionIndicator())
</script>

<template>
  <template v-if="selectContext.isMultiple.value">
    <div
      v-if="!selectOptionContext.isSelected.value"
      class="rounded-xs border border-solid border-primary"
    >
      <slot>
        <Icon
          :class="optionIndicatorClasses"
          icon="check"
          class="opacity-0"
        />
      </slot>
    </div>

    <ListboxItemIndicator
      class="rounded-xs border border-solid border-brand-alt bg-brand-solid"
    >
      <div>
        <slot>
          <Icon
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
        <Icon
          :class="optionIndicatorClasses"
          icon="check"
        />
      </slot>
    </div>

    <Transition
      enter-from-class="opacity-0 scale-75"
      leave-active-class="duration-150"
      enter-active-class="duration-150"
      leave-to-class="opacity-0 scale-75"
    >
      <ListboxItemIndicator>
        <div>
          <slot>
            <Icon
              :class="optionIndicatorClasses"
              icon="check"
            />
          </slot>
        </div>
      </ListboxItemIndicator>
    </Transition>
  </template>
</template>
