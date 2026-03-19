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
const ICONS_ONLY_SIDEBAR_WIDTH = '3rem' // 48px
const SIDEBAR_CONTAINER_PADDING = '0.5625rem' // 9px
const SIDEBAR_ICON_SIZE = '1rem' // 16px
const SIDEBAR_ICON_CELL_SIZE = '1.875rem' // 30px (48 - 2 * 9)
const SIDEBAR_LINK_HEIGHT = '1.875rem' // 30px
const SIDEBAR_LOGO_PADDING = '0.1875rem' // 3px ((SIDEBAR_ICON_CELL_SIZE - 24) / 2)
const SIDEBAR_AVATAR_PADDING = '0.1875rem' // 3px ((SIDEBAR_ICON_CELL_SIZE - 24) / 2)
const SIDEBAR_LOGO_HEIGHT = '2.625rem' // 42px

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
        if (variant.value === 'icons-only') {
          sidebarWidth.value = value ? DEFAULT_SIDEBAR_WIDTH : ICONS_ONLY_SIDEBAR_WIDTH
        }

        isSidebarOpenSetting.value = value
      }
    },
  })

  const sidebarContainerPadding = SIDEBAR_CONTAINER_PADDING
  const sidebarIconSize = SIDEBAR_ICON_SIZE
  const sidebarIconCellSize = SIDEBAR_ICON_CELL_SIZE
  const sidebarLinkHeight = SIDEBAR_LINK_HEIGHT
  const sidebarLogoPadding = SIDEBAR_LOGO_PADDING
  const sidebarAvatarPadding = SIDEBAR_AVATAR_PADDING
  const sidebarLogoHeight = SIDEBAR_LOGO_HEIGHT

  function closeIfFloatingSidebar(): void {
    if (isFloatingSidebar.value) {
      isFloatingSidebarOpen.value = false
    }
  }

  function setVariant(value: MainSidebarVariant): void {
    variant.value = value

    if (value === 'icons-only') {
      sidebarWidth.value = isSidebarOpen.value ? DEFAULT_SIDEBAR_WIDTH : ICONS_ONLY_SIDEBAR_WIDTH

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
    sidebarAvatarPadding,
    sidebarContainerPadding,
    sidebarIconCellSize,
    sidebarIconSize,
    sidebarLinkHeight,
    sidebarLogoHeight,
    sidebarLogoPadding,
    sidebarWidth,
    variant,
  }
}
