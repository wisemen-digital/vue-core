import {
  useBreakpoints,
  useLocalStorage,
} from '@vueuse/core'
import {
  computed,
  ref,
} from 'vue'

const SIDEBAR_WIDTH = '14rem'
const isFloatingSidebarOpen = ref<boolean>(false)

export function useSidebar() {
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

  return {
    isFloatingSidebar,
    isSidebarOpen,
    closeIfFloatingSidebar,
    sidebarWidth: SIDEBAR_WIDTH,
  }
}
