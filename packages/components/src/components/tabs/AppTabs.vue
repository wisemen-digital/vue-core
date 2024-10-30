<script setup lang="ts">
import {
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'radix-vue'
import {
  computed,
  ref,
  watch,
} from 'vue'

import AppBadge from '@/components/badge/AppBadge.vue'
import AppUnstyledButton from '@/components/button/AppUnstyledButton.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import { useTabsStyle } from '@/components/tabs/tabs.style'
import AppText from '@/components/text/AppText.vue'
import { useTabs } from '@/composables/tabs/tabs.composable'
import type { TabItem } from '@/types/tabItem.type'

const props = withDefaults(
  defineProps<{
  /**
   * Whether the tabs should take up the full width of the container.
   */
    isFullWidth?: boolean
    /**
     * All the tabs to be rendered.
     */
    items: TabItem[]
  }>(),
  {
    isFullWidth: false,
  },
)

const activeTabModel = defineModel<TabItem>('tab', {
  required: true,
})

const tabItemRef = ref<InstanceType<any>[]>([])
const tabsRootRef = ref<InstanceType<any> | null>(null)
const scrollContainerRef = ref<InstanceType<any> | null>(null)

const tabsComposable = useTabs(
  tabsRootRef,
  scrollContainerRef,
)

const computedModel = computed<string>({
  get: () => activeTabModel.value.id,
  set: (value) => {
    activeTabModel.value = props.items.find((tab) => tab.id === value)!
  },
})

const tabsStyle = useTabsStyle()

const indicatorClasses = computed<string>(() => tabsStyle.indicator())
const leftGradientClasses = computed<string>(() => tabsStyle.gradient({ direction: 'to-right' }))
const rightGradientClasses = computed<string>(() => tabsStyle.gradient({ direction: 'to-left' }))
const leftScrollButtonClasses = computed<string>(() => tabsStyle.scrollButton({ direction: 'to-left' }))
const rightScrollButtonClasses = computed<string>(() => tabsStyle.scrollButton({ direction: 'to-right' }))

function isTabActive(tab: TabItem): boolean {
  return tab.id === computedModel.value
}

watch(computedModel, (value) => {
  const tabIndex = props.items.findIndex((tab) => tab.id === value)
  const tabItem = tabItemRef.value[tabIndex]

  tabItem.$el.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  })
})
</script>

<template>
  <TabsRoot
    ref="tabsRootRef"
    v-model="computedModel"
    class="relative"
  >
    <div
      v-if="tabsComposable.isTabScrollable.value && !tabsComposable.isArrivedStateRight.value"
      :class="rightGradientClasses"
    />
    <div
      v-if="tabsComposable.isTabScrollable.value && !tabsComposable.hasScrolledToTheLeft.value"
      :class="leftGradientClasses"
    />
    <AppUnstyledButton
      v-if="tabsComposable.isTabScrollable.value && tabsComposable.hasScrolledToTheLeft.value"
      :class="rightScrollButtonClasses"
      @click="tabsComposable.onScrollToTheRight"
    >
      <AppIcon
        size="sm"
        icon="chevronRight"
      />
    </AppUnstyledButton>

    <AppUnstyledButton
      v-if="tabsComposable.isTabScrollable.value && tabsComposable.hasScrolledToTheRight.value"
      :class="leftScrollButtonClasses"
      @click="tabsComposable.onScrollToTheLeft"
    >
      <AppIcon
        size="sm"
        icon="chevronLeft"
      />
    </AppUnstyledButton>
    <TabsList
      :class="tabsStyle.list({
        isFullWidth: props.isFullWidth,
      })"
    >
      <TabsIndicator :class="indicatorClasses" />

      <TabsTrigger
        v-for="tab of items"
        :key="tab.label"
        :data-test-id="tab.testId"
        :value="tab.id"
        :class="tabsStyle.triggerGroup({
          isFullWidth: props.isFullWidth,
        })"
      >
        <div
          :class="tabsStyle.triggerTab({
            isFullWidth: props.isFullWidth,
          })"
        >
          <AppText
            :class="tabsStyle.text({
              isActive: isTabActive(tab),
            })"
            as="span"
            variant="subtext"
          >
            {{ tab.label }}
          </AppText>
          <AppBadge
            v-if="tab.badge"
            :class="tab.badge.class"
          >
            {{ tab.badge.label }}
          </AppBadge>
        </div>
      </TabsTrigger>
    </TabsList>
  </TabsRoot>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
