<script setup lang="ts">
import { computed } from 'vue'

import type { CustomComponentVariant } from '@/class-variant/classVariant.type'
import {
  getCustomComponentVariant,
  mergeClasses,
} from '@/class-variant/customClassVariants'
import type { CreateTableStyle } from '@/components/table/table.style'
import { useTable } from '@/components/table-next/table.composable'
import { useProvideTableContext } from '@/components/table-next/table.context'
import type { TableProps } from '@/components/table-next/table.props'
import { createTableNextStyle } from '@/components/table-next/table.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<TableProps>(), {
  isFirstColumnSticky: false,
  isLastColumnSticky: false,
  classConfig: null,
  variant: null,
})

const {
  theme,
} = injectThemeProviderContext()

const {
  hasReachedHorizontalEnd,
  hasVerticalOverflow,
  isScrolledHorizontally,
  setTableScrollContainerRef,
} = useTable()

const tableStyle = computed<CreateTableStyle>(() => createTableNextStyle({
  variant: props.variant ?? undefined,
}))

const customClassConfig = computed<CustomComponentVariant<'tableNext'>>(
  () => getCustomComponentVariant('tableNext', theme.value, {
    variant: props.variant,
  }),
)

useProvideTableContext({
  ...toComputedRefs(props),
  hasReachedHorizontalEnd,
  hasVerticalOverflow,
  isScrolledHorizontally,
  customClassConfig,
  setTableScrollContainerRef,
  style: tableStyle,
})
</script>

<template>
  <div
    :class="tableStyle.root({
      class: mergeClasses(customClassConfig?.root, props.classConfig?.root),
    })"
    role="table"
  >
    <slot />
  </div>
</template>
