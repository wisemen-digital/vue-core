import {
  useBreakpoints,
  useLocalStorage,
} from '@vueuse/core'
import {
  computed,
  ref,
} from 'vue'

import type { MainSidebarVariant } from '@/ui/sidebar/types/mainSidebar.type'

const DEFAULT_SIDEBAR_WIDTH = '14rem'
const ICONS_ONLY_SIDEBAR_WIDTH = '3.4rem'
const isFloatingSidebarOpen = ref<boolean>(false)
const sidebarWidth = ref<string>(DEFAULT_SIDEBAR_WIDTH)
const variant = ref<MainSidebarVariant>('icons-with-labels')

export function useMainSidebar() {
  const screen = useBreakpoints({
    xl: 960,
  })

  const isSidebarOpenSetting = useLocalStorage<boolean>(
    'dashboard-sidebar-is-open',
    true,
  )

  const isFloatingSidebar = screen.smaller('xl')

  const isSidebarOpen = computed<boolean>({
    get: () =>
      isFloatingSidebar.value
        ? isFloatingSidebarOpen.value
        : isSidebarOpenSetting.value,
    set: (value: boolean) => {
      if (isFloatingSidebar.value) {
        isFloatingSidebarOpen.value = value
      }
      else {
        isSidebarOpenSetting.value = value
      }
    },
  })

  function closeIfFloatingSidebar(): void {
    if (isFloatingSidebar.value) {
      isFloatingSidebarOpen.value = false
    }
  }

  function setVariant(value: MainSidebarVariant): void {
    variant.value = value

    if (value === 'icons-only') {
      sidebarWidth.value = ICONS_ONLY_SIDEBAR_WIDTH

      return
    }

    sidebarWidth.value = DEFAULT_SIDEBAR_WIDTH
  }

  return {
    isFloatingSidebar,
    isSidebarOpen,
    closeIfFloatingSidebar,
    iconsOnlySidebarWidth: ICONS_ONLY_SIDEBAR_WIDTH,
    setVariant,
    sidebarWidth,
    variant,
  }
}
