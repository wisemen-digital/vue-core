import {
  useResizeObserver,
  useScroll,
} from '@vueuse/core'
import type { ComputedRef, Ref } from 'vue'
import {
  computed,
  onMounted,
  ref,
  watch,
} from 'vue'

export interface UseTabsReturnType {
  hasScrolledToTheLeft: Ref<boolean>
  hasScrolledToTheRight: Ref<boolean>
  isArrivedStateLeft: ComputedRef<boolean>
  isArrivedStateRight: ComputedRef<boolean>
  isTabScrollable: Ref<boolean>
  onScrollToTheLeft: () => void
  onScrollToTheRight: () => void
}

export function useTabs(
  tabsRootRef: Ref<InstanceType<any> | null>,
  scrollContainerRef: Ref<InstanceType<any> | null>,
): UseTabsReturnType {
  const SCROLL_DISTANCE = 100
  const isTabScrollable = ref<boolean>(false)

  const hasScrolledToTheLeft = ref<boolean>(true)
  const hasScrolledToTheRight = ref<boolean>(false)

  const scroll = useScroll(computed<InstanceType<any>>(() => scrollContainerRef.value?.$el), {
    behavior: 'smooth',
    offset: { left: 20, right: 20 },
  })

  const isArrivedStateRight = computed<boolean>(() => scroll.arrivedState.right)
  const isArrivedStateLeft = computed<boolean>(() => scroll.arrivedState.left)

  function onScrollToTheRight(): void {
    scroll.x.value += SCROLL_DISTANCE
  }

  function onScrollToTheLeft(): void {
    scroll.x.value -= SCROLL_DISTANCE
  }

  useResizeObserver(tabsRootRef, () => {
    hasScrolledToTheRight.value = false
    hasScrolledToTheLeft.value = true

    if ((Boolean((scrollContainerRef.value?.$el.scrollWidth))) && (Boolean((tabsRootRef.value?.$el.clientWidth)))) {
      isTabScrollable.value = scrollContainerRef.value.$el.scrollWidth > tabsRootRef.value?.$el.clientWidth
    }
  })

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

  onMounted(() => {
    if ((Boolean((scrollContainerRef.value?.$el.scrollWidth))) && (Boolean((tabsRootRef.value?.$el.clientWidth)))) {
      isTabScrollable.value = scrollContainerRef.value.$el.scrollWidth > tabsRootRef.value.$el.clientWidth
    }
  })

  return {
    hasScrolledToTheLeft,
    hasScrolledToTheRight,
    isArrivedStateLeft,
    isArrivedStateRight,
    isTabScrollable,
    onScrollToTheLeft,
    onScrollToTheRight,
  }
}
