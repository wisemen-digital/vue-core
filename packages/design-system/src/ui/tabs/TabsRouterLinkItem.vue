<script setup lang="ts">
import { TabsTrigger as RekaTabsTrigger } from 'reka-ui'
import { computed } from 'vue'
import {
  RouterLink,
  useRouter,
} from 'vue-router'

import ActionTooltip from '@/ui/action-tooltip/ActionTooltip.vue'
import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'
import { UINumberBadge } from '@/ui/number-badge/index'
import { useInjectTabsContext } from '@/ui/tabs/tabs.context'
import type { TabsRouterLinkItemProps } from '@/ui/tabs/tabs.props'
import { UIText } from '@/ui/text/index'

const props = withDefaults(defineProps<TabsRouterLinkItemProps>(), {
  isDisabled: false,
  count: null,
  disabledReason: null,
  icon: undefined,
  label: null,
})

const {
  variants,
} = useInjectTabsContext()

const router = useRouter()

const routeName = computed<string>(() => {
  const resolved = router.resolve(props.to)

  return resolved.name as string
})
</script>

<template>
  <ActionTooltip
    :is-disabled="!props.isDisabled || props.disabledReason == null"
    :label="props.disabledReason"
  >
    <ClickableElement>
      <RekaTabsTrigger
        :value="routeName"
        :disabled="props.isDisabled"
        :as-child="true"
        :class="variants.item()"
      >
        <RouterLink
          :to="props.to"
          :replace="true"
        >
          <component
            :is="props.icon"
            v-if="props.icon != null"
            class="size-4 shrink-0"
          />
          <UIText
            v-if="props.label != null"
            :text="props.label"
            class="text-xs"
          />
          <slot v-else />
          <UINumberBadge
            v-if="props.count != null"
            :value="props.count.toString()"
            size="sm"
          />
        </RouterLink>
      </RekaTabsTrigger>
    </ClickableElement>
  </ActionTooltip>
</template>
