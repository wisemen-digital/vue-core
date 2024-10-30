<script setup lang="ts">
import {
  useResizeObserver,
  useScroll,
} from '@vueuse/core'
import {
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'radix-vue'
import {
  computed,
  onMounted,
  ref,
  watch,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'

import AppBadge from '@/components/badge/AppBadge.vue'
import AppUnstyledButton from '@/components/button/AppUnstyledButton.vue'
import AppIcon from '@/components/icon/AppIcon.vue'
import { useTabsStyle } from '@/components/tabs/tabs.style'
import AppText from '@/components/text/AppText.vue'
import type { RouteTabItem } from '@/types/tabItem.type'

const props = withDefaults(defineProps<{
  /**
   * Whether the tabs should take up the full width of the container.
   */
  isFullWidth?: boolean
  /**
   * All the tabs to be rendered.
   */
  tabs: RouteTabItem[]
}>(), {
  isFullWidth: false,
})

const route = useRoute()
const router = useRouter()
const tabsStyle = useTabsStyle()

const isTabScrollable = ref<boolean>(false)
const tabItemRef = ref<InstanceType<any>[]>([])
const hasScrolledToTheLeft = ref<boolean>(true)
const hasScrolledToTheRight = ref<boolean>(false)
const tabsRootRef = ref<InstanceType<any> | null>(null)
const scrollContainerRef = ref<InstanceType<any> | null>(null)

const scroll = useScroll(computed<InstanceType<any>>(() => scrollContainerRef.value?.$el), {
  behavior: 'smooth',
  offset: { left: 20, right: 20 },
})

const indicatorClasses = computed<string>(() => tabsStyle.indicator())
const leftGradientClasses = computed<string>(() => tabsStyle.gradient({ direction: 'to-right' }))
const rightGradientClasses = computed<string>(() => tabsStyle.gradient({ direction: 'to-left' }))
const leftScrollButtonClasses = computed<string>(() => tabsStyle.scrollButton({ direction: 'to-left' }))
const rightScrollButtonClasses = computed<string>(() => tabsStyle.scrollButton({ direction: 'to-right' }))

const activeRouteName = computed<string>({
  get: () => route.name as string,
  set: (value: string) => {
    const tab = props.tabs.find((tab) => tab.to.name === value) ?? null

    if (tab === null) {
      throw new Error(`Tab with route name "${String(value)}" not found`)
    }

    void router.push(tab.to)
  },
})

function isTabActive(tab: RouteTabItem): boolean {
  return tab.to.name === activeRouteName.value
}

// TODO: tabs should render a RouterLink instead of a button

function onScrollToTheRight(): void {
  scroll.x.value += tabItemRef.value[0]?.$el.clientWidth ?? 100
}

function onScrollToTheLeft(): void {
  scroll.x.value -= tabItemRef.value[0]?.$el.clientWidth ?? 100
}

watch(() => scroll.arrivedState.right, (newValue) => {
  if (newValue && !hasScrolledToTheRight.value) {
    hasScrolledToTheRight.value = true
    hasScrolledToTheLeft.value = false
  }
})

watch(() => scroll.arrivedState.left, (newValue) => {
  if (newValue && !hasScrolledToTheLeft.value) {
    hasScrolledToTheLeft.value = true
    hasScrolledToTheRight.value = false
  }
})

watch(activeRouteName, (value) => {
  const tabIndex = props.tabs.findIndex((tab) => tab.to.name === value)
  const tabItem = tabItemRef.value[tabIndex]

  tabItem.$el.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  })
})

useResizeObserver(tabsRootRef, () => {
  hasScrolledToTheRight.value = false
  hasScrolledToTheLeft.value = true

  if (scrollContainerRef.value?.$el.scrollWidth && tabsRootRef.value?.$el.clientWidth) {
    isTabScrollable.value = scrollContainerRef.value.$el.scrollWidth > tabsRootRef.value?.$el.clientWidth
  }
})

onMounted(() => {
  if (scrollContainerRef.value?.$el.scrollWidth && tabsRootRef.value?.$el.clientWidth) {
    isTabScrollable.value = scrollContainerRef.value.$el.scrollWidth > tabsRootRef.value.$el.clientWidth
  }
})
</script>

<template>
  <TabsRoot
    ref="tabsRootRef"
    v-model="activeRouteName"
    class="relative"
  >
    <div
      v-if="isTabScrollable && !scroll.arrivedState.right"
      :class="rightGradientClasses"
    />
    <div
      v-if="isTabScrollable && !scroll.arrivedState.left"
      :class="leftGradientClasses"
    />
    <AppUnstyledButton
      v-if="isTabScrollable && hasScrolledToTheLeft"
      :class="rightScrollButtonClasses"
      @click="onScrollToTheRight"
    >
      <AppIcon
        size="sm"
        icon="chevronRight"
      />
    </AppUnstyledButton>

    <AppUnstyledButton
      v-if="isTabScrollable && hasScrolledToTheRight"
      :class="leftScrollButtonClasses"
      @click="onScrollToTheLeft"
    >
      <AppIcon
        size="sm"
        icon="chevronLeft"
      />
    </AppUnstyledButton>

    <TabsList
      ref="scrollContainerRef"
      :class="tabsStyle.list({
        isFullWidth: props.isFullWidth,
      })"
    >
      <TabsIndicator :class="indicatorClasses" />

      <TabsTrigger
        v-for="tab of tabs"
        ref="tabItemRef"
        :key="tab.label"
        :value="(tab.to.name as string)"
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
