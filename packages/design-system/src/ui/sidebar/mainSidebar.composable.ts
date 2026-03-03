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

const SIDEBAR_COLLAPSED_WIDTH = 44
const SIDEBAR_CONTAINER_PADDING = 8
const SIDEBAR_ICON_SIZE = 16
const SIDEBAR_LOGO_SIZE = 24
const SIDEBAR_AVATAR_SIZE = 24

const ICONS_ONLY_SIDEBAR_WIDTH = `${SIDEBAR_COLLAPSED_WIDTH / 16}rem`

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

  const collapsedInnerSize = SIDEBAR_COLLAPSED_WIDTH - 2 * SIDEBAR_CONTAINER_PADDING

  const sidebarContainerPadding = `${SIDEBAR_CONTAINER_PADDING}px`
  const sidebarIconSize = `${SIDEBAR_ICON_SIZE}px`
  const sidebarLinkPadding = `${(collapsedInnerSize - SIDEBAR_ICON_SIZE) / 2}px`
  const sidebarLinkHeight = `${collapsedInnerSize}px`
  const sidebarLogoPadding = `${(collapsedInnerSize - SIDEBAR_LOGO_SIZE) / 2}px`
  const sidebarAvatarPadding = `${(collapsedInnerSize - SIDEBAR_AVATAR_SIZE) / 2}px`

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
    sidebarIconSize,
    sidebarLinkHeight,
    sidebarLinkPadding,
    sidebarLogoPadding,
    sidebarWidth,
    variant,
  }
}
