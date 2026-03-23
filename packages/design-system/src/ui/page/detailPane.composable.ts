import {
  useBreakpoints,
  useLocalStorage,
} from '@vueuse/core'
import { useRouteQuery } from '@vueuse/router'
import type { Ref } from 'vue'
import {
  computed,
  ref,
} from 'vue'

import type { DetailPaneStorage } from '@/ui/page/detailPane.type'

const DEFAULT_WIDTH = '20rem'

interface UseDetailPaneOptions {
  isOpen: Ref<boolean>
  storage: DetailPaneStorage | null
  width: string
}

export function useDetailPane(options: UseDetailPaneOptions) {
  const {
    storage, width = DEFAULT_WIDTH,
  } = options

  const screen = useBreakpoints({
    xl: 960,
  })

  const isFloatingDetailPane = screen.smaller('xl')
  const isFloatingOpen = ref<boolean>(false)

  function getStorageRef(): Ref<boolean> {
    if (storage === null || storage === undefined) {
      return options.isOpen
    }

    if (storage.strategy === 'localStorage') {
      return useLocalStorage<boolean>(storage.key, options.isOpen.value)
    }

    if (storage.strategy === 'routeQuery') {
      const queryValue = useRouteQuery<string>(storage.key, String(options.isOpen.value))

      return computed<boolean>({
        get: () => queryValue.value === 'true',
        set: (value: boolean) => {
          queryValue.value = String(value)
        },
      })
    }

    return options.isOpen
  }

  const storageRef = getStorageRef()

  const isOpen = computed<boolean>({
    get: () => {
      if (isFloatingDetailPane.value) {
        return isFloatingOpen.value
      }

      return storageRef.value
    },
    set: (value: boolean) => {
      if (isFloatingDetailPane.value) {
        isFloatingOpen.value = value
      }
      else {
        storageRef.value = value
      }
    },
  })

  function toggleIsOpen(): void {
    isOpen.value = !isOpen.value
  }

  return {
    isFloatingDetailPane,
    isOpen,
    sidebarWidth: width,
    toggleIsOpen,
  }
}
