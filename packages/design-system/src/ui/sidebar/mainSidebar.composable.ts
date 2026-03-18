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

const SIDEBAR_COLLAPSED_WIDTH = 48
const SIDEBAR_CONTAINER_PADDING = 9
const SIDEBAR_ICON_SIZE = 16
const SIDEBAR_ICON_CELL_SIZE = SIDEBAR_COLLAPSED_WIDTH - 2 * SIDEBAR_CONTAINER_PADDING
const SIDEBAR_LOGO_SIZE = 24
const SIDEBAR_AVATAR_SIZE = 24
const SIDEBAR_LOGO_HEIGHT = 42

function pxToRem(px: number): string {
  const rootFontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize)

  return `${px / rootFontSize}rem`
}

const ICONS_ONLY_SIDEBAR_WIDTH = pxToRem(SIDEBAR_COLLAPSED_WIDTH)

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

  const sidebarContainerPadding = pxToRem(SIDEBAR_CONTAINER_PADDING)
  const sidebarIconSize = pxToRem(SIDEBAR_ICON_SIZE)
  const sidebarIconCellSize = pxToRem(SIDEBAR_ICON_CELL_SIZE)
  const sidebarLinkHeight = pxToRem(SIDEBAR_ICON_CELL_SIZE)
  const sidebarLogoPadding = pxToRem((SIDEBAR_ICON_CELL_SIZE - SIDEBAR_LOGO_SIZE) / 2)
  const sidebarAvatarPadding = pxToRem((SIDEBAR_ICON_CELL_SIZE - SIDEBAR_AVATAR_SIZE) / 2)
  const sidebarLogoHeight = pxToRem(SIDEBAR_LOGO_HEIGHT)

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
