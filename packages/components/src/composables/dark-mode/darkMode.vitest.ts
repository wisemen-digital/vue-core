import { useStorage } from '@vueuse/core'
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import {
  ref,
  watch,
} from 'vue'

import { useDarkMode } from '@/composables'
import type { DarkModeValue } from '@/composables/dark-mode/darkMode.composable'

const mockStorage: Record<string, any> = {}

vi.mock('@vueuse/core', () => {
  return {

    useStorage: vi.fn(<T>(key: string, defaultValue: (() => T) | T) => {
      const storedValue = mockStorage[key]

      let initialValue: T

      if (storedValue !== undefined) {
        initialValue = storedValue as T
      }
      else if (typeof defaultValue === 'function') {
        initialValue = (defaultValue as () => T)()
      }
      else {
        initialValue = defaultValue
      }

      const data = ref<T>(initialValue)

      watch(data, (newValue) => {
        mockStorage[key] = newValue
      }, {
        deep: true,
        immediate: true,
      })

      return data
    }),
  }
})

describe('useDarkMode', () => {
  beforeEach(() => {
    for (const key in mockStorage) {
      delete mockStorage[key]
    }

    vi.clearAllMocks()
  })

  it('should call useStorage with "theme" as the key and a default value getter', () => {
    useDarkMode()

    expect(vi.mocked(useStorage)).toHaveBeenCalledTimes(1)

    expect(vi.mocked(useStorage)).toHaveBeenCalledWith('theme', expect.any(Function))

    const mockCall = vi.mocked(useStorage).mock.calls[0] as unknown as [string, () => DarkModeValue]

    const defaultValueGetter = mockCall[1] as unknown as () => DarkModeValue

    expect(defaultValueGetter()).toBe('light')
  })

  it('should return the default value "light" when storage is empty', () => {
    expect(mockStorage).toEqual({})

    const darkMode = useDarkMode()

    expect(darkMode.value).toBe('light')

    expect(mockStorage.theme).toBe('light')
  })

  it('should return the stored value if it exists in storage', () => {
    mockStorage.theme = 'dark'

    const darkMode = useDarkMode()

    expect(darkMode.value).toBe('dark')

    expect(mockStorage.theme).toBe('dark')
  })

  it('should update storage when the returned ref value changes', () => {
    const darkMode = useDarkMode()

    expect(darkMode.value).toBe('light')
    expect(mockStorage.theme).toBe('light')

    darkMode.value = 'system'

    expect(darkMode.value).toBe('system')

    expect(mockStorage.theme).toBe('system')

    darkMode.value = 'dark'

    expect(darkMode.value).toBe('dark')

    expect(mockStorage.theme).toBe('dark')
  })
})
