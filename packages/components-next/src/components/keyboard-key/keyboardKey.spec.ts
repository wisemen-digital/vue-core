import { mount } from '@vue/test-utils'
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import { ref } from 'vue'

import type { ResolvedClassConfig } from '@/class-variant/classVariant.type'
import type { KeyboardKeyProps } from '@/components/keyboard-key/keyboardKey.props'
import KeyboardKeyComponent from '@/components/keyboard-key/KeyboardKey.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { KeyboardKey } from '@/types/keyboard.type'

const mockThemeValue = ref<string>('default-theme')

// Use vi.hoisted to define the mock functions
const mocks = vi.hoisted(() => {
  const mockGetCustomComponentVariant = vi.fn()
  const mockMergeClasses = vi.fn((...args: (string | undefined)[]) => args.filter(Boolean).join(' ').trim())
  const mockCreateKeyboardKeyStyle = vi.fn()

  return {
    mockCreateKeyboardKeyStyle,
    mockGetCustomComponentVariant,
    mockMergeClasses,
  }
})

vi.mock('@/components/theme-provider/themeProvider.context', () => ({ injectThemeProviderContext: vi.fn(() => ({ theme: mockThemeValue })) }))

vi.mock('@/class-variant/customClassVariants', () => ({
  getCustomComponentVariant: mocks.mockGetCustomComponentVariant,
  mergeClasses: mocks.mockMergeClasses,
}))

vi.mock('@/components/keyboard-key/keyboardKey.style', () => ({ createKeyboardKeyStyle: mocks.mockCreateKeyboardKeyStyle }))

let userAgentSpy: ReturnType<typeof vi.spyOn>

const BASE_STYLE_CLASS = 'base-kbd-style'
const VARIANT_STYLE_SUFFIX = 'variant-kbd-style'
const CUSTOM_VARIANT_FROM_THEME_SUFFIX = 'custom-theme-kbd-style'
const USER_CONFIG_CLASS = 'user-provided-kbd-class'

function mountComponent(props: KeyboardKeyProps): ReturnType<typeof mount> {
  return mount(KeyboardKeyComponent, { props })
}

function setupOsAndStyleMocks(isWindowsEnvironment: boolean): void {
  const userAgent = isWindowsEnvironment ? 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'

  if (userAgentSpy) {
    userAgentSpy.mockRestore()
  }

  userAgentSpy = vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(userAgent)

  mocks.mockCreateKeyboardKeyStyle.mockImplementation(({ variant }: { variant?: string }) => {
    const keyMethodMock = vi.fn((opts: { class?: string } = {}) => {
      let styleClasses = BASE_STYLE_CLASS

      if (variant) {
        styleClasses += ` ${VARIANT_STYLE_SUFFIX}-${variant}`
      }
      if (opts.class) {
        styleClasses += ` ${opts.class}`
      }

      return styleClasses.trim()
    })

    return { key: keyMethodMock }
  })

  mocks.mockGetCustomComponentVariant.mockImplementation((
    _componentName: string,
    theme: string,
    { variant }: { variant?: string | null },
  ) => {
    let classKey = ''

    if (variant) {
      classKey = `${variant}-${CUSTOM_VARIANT_FROM_THEME_SUFFIX}-${theme}`
    }
    else {
      classKey = `default-${CUSTOM_VARIANT_FROM_THEME_SUFFIX}-${theme}`
    }

    return { key: classKey } as ResolvedClassConfig<'keyboardKey'>
  })
}

describe('keyboardKey.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockThemeValue.value = 'default-theme'
  })

  afterEach(() => {
    if (userAgentSpy) {
      userAgentSpy.mockRestore()
    }
  })

  it('renders a <kbd> element', () => {
    setupOsAndStyleMocks(false)

    const wrapper = mountComponent({ keyboardKey: 'a' })

    expect(wrapper.find('kbd').exists()).toBeTruthy()
  })

  describe('oS Specific Key Display', () => {
    const windowsTestCases: { expected: string
      input: KeyboardKey }[] = [
      {
        expected: 'Alt',
        input: 'alt',
      },
      {
        expected: 'Ctrl',
        input: 'ctrl',
      },
      {
        expected: 'Win',
        input: 'meta',
      },
      {
        expected: 'Enter',
        input: 'enter',
      },
      {
        expected: 'Backspace',
        input: 'backspace',
      },
      {
        expected: 'Shift',
        input: 'shift',
      },
      {
        expected: 'Esc',
        input: 'escape',
      },
      {
        expected: '↑',
        input: 'arrowup',
      },
      {
        expected: 'a',
        input: 'a',
      },
      {
        expected: 'tab',
        input: 'tab',
      },
    ]

    it.each(windowsTestCases)(`displays "$expected" for key "$input" on Windows`, ({
      expected, input,
    }) => {
      setupOsAndStyleMocks(true)

      const wrapper = mountComponent({ keyboardKey: input })

      expect(wrapper.text()).toBe(expected)
    })

    const macTestCases: { expected: string
      input: KeyboardKey }[] = [
      {
        expected: '⌥',
        input: 'alt',
      },
      {
        expected: '⌃',
        input: 'ctrl',
      },
      {
        expected: '⌘',
        input: 'meta',
      },
      {
        expected: '↵',
        input: 'enter',
      },
      {
        expected: '⌫',
        input: 'backspace',
      },
      {
        expected: '⇧',
        input: 'shift',
      },
      {
        expected: 'ESC',
        input: 'escape',
      },
      {
        expected: '←',
        input: 'arrowleft',
      },
      {
        expected: 'b',
        input: 'b',
      },
      {
        expected: 'v',
        input: 'v',
      },
    ]

    it.each(macTestCases)(`displays "$expected" for key "$input" on Mac/Non-Windows`, ({
      expected, input,
    }) => {
      setupOsAndStyleMocks(false)

      const wrapper = mountComponent({ keyboardKey: input })

      expect(wrapper.text()).toBe(expected)
    })
  })

  describe('class Application', () => {
    it('applies default base style and theme classes when no variant or classConfig is provided', () => {
      setupOsAndStyleMocks(false)

      const wrapper = mountComponent({ keyboardKey: 'f' })
      const kbd = wrapper.find('kbd')

      expect(mocks.mockCreateKeyboardKeyStyle).toHaveBeenCalledWith({ variant: undefined })
      expect(mocks.mockGetCustomComponentVariant).toHaveBeenCalledWith('keyboardKey', 'default-theme', { variant: null })
      expect(mocks.mockMergeClasses).toHaveBeenCalledWith(`default-${CUSTOM_VARIANT_FROM_THEME_SUFFIX}-default-theme`, undefined)
      expect(kbd.classes()).toContain(BASE_STYLE_CLASS)
      expect(kbd.classes()).toContain(`default-${CUSTOM_VARIANT_FROM_THEME_SUFFIX}-default-theme`)
    })

    it('applies variant-specific styles and theme classes when "variant" prop is provided', () => {
      setupOsAndStyleMocks(false)

      const variant: string = 'special'
      const wrapper = mountComponent({
        keyboardKey: 'g',
        variant,
      })
      const kbd = wrapper.find('kbd')

      expect(mocks.mockCreateKeyboardKeyStyle).toHaveBeenCalledWith({ variant })
      expect(mocks.mockGetCustomComponentVariant).toHaveBeenCalledWith('keyboardKey', 'default-theme', { variant })
      expect(mocks.mockMergeClasses).toHaveBeenCalledWith(`${variant}-${CUSTOM_VARIANT_FROM_THEME_SUFFIX}-default-theme`, undefined)
      expect(kbd.classes()).toContain(BASE_STYLE_CLASS)
      expect(kbd.classes()).toContain(`${VARIANT_STYLE_SUFFIX}-${variant}`)
      expect(kbd.classes()).toContain(`${variant}-${CUSTOM_VARIANT_FROM_THEME_SUFFIX}-default-theme`)
    })

    it('merges "classConfig.key" with other classes', () => {
      setupOsAndStyleMocks(false)

      const classConfig = { key: USER_CONFIG_CLASS }
      const wrapper = mountComponent({
        classConfig,
        keyboardKey: 'h',
      })
      const kbd = wrapper.find('kbd')

      expect(mocks.mockCreateKeyboardKeyStyle).toHaveBeenCalledWith({ variant: undefined })
      expect(mocks.mockGetCustomComponentVariant).toHaveBeenCalledWith('keyboardKey', 'default-theme', { variant: null })
      expect(mocks.mockMergeClasses).toHaveBeenCalledWith(`default-${CUSTOM_VARIANT_FROM_THEME_SUFFIX}-default-theme`, USER_CONFIG_CLASS)
      expect(kbd.classes()).toContain(BASE_STYLE_CLASS)
      expect(kbd.classes()).toContain(`default-${CUSTOM_VARIANT_FROM_THEME_SUFFIX}-default-theme`)
      expect(kbd.classes()).toContain(USER_CONFIG_CLASS)
    })

    it('correctly applies classes with both "variant" and "classConfig.key"', () => {
      setupOsAndStyleMocks(false)

      const variant: string = 'caution'
      const classConfig = { key: USER_CONFIG_CLASS }
      const wrapper = mountComponent({
        classConfig,
        keyboardKey: 'i',
        variant,
      })
      const kbd = wrapper.find('kbd')

      expect(mocks.mockCreateKeyboardKeyStyle).toHaveBeenCalledWith({ variant })
      expect(mocks.mockGetCustomComponentVariant).toHaveBeenCalledWith('keyboardKey', 'default-theme', { variant })
      expect(mocks.mockMergeClasses).toHaveBeenCalledWith(`${variant}-${CUSTOM_VARIANT_FROM_THEME_SUFFIX}-default-theme`, USER_CONFIG_CLASS)
      expect(kbd.classes()).toContain(BASE_STYLE_CLASS)
      expect(kbd.classes()).toContain(`${VARIANT_STYLE_SUFFIX}-${variant}`)
      expect(kbd.classes()).toContain(`${variant}-${CUSTOM_VARIANT_FROM_THEME_SUFFIX}-default-theme`)
      expect(kbd.classes()).toContain(USER_CONFIG_CLASS)
    })

    it('handles explicit null for "variant" and "classConfig" gracefully (defaults)', () => {
      setupOsAndStyleMocks(false)

      const wrapper = mountComponent({
        classConfig: null,
        keyboardKey: 'j',
        variant: null,
      })
      const kbd = wrapper.find('kbd')

      expect(mocks.mockCreateKeyboardKeyStyle).toHaveBeenCalledWith({ variant: undefined })
      expect(mocks.mockGetCustomComponentVariant).toHaveBeenCalledWith('keyboardKey', 'default-theme', { variant: null })
      expect(mocks.mockMergeClasses).toHaveBeenCalledWith(`default-${CUSTOM_VARIANT_FROM_THEME_SUFFIX}-default-theme`, undefined)
      expect(kbd.classes()).toContain(BASE_STYLE_CLASS)
      expect(kbd.classes()).toContain(`default-${CUSTOM_VARIANT_FROM_THEME_SUFFIX}-default-theme`)
      expect(kbd.classes().join(' ')).not.toContain(USER_CONFIG_CLASS)
      expect(kbd.classes().join(' ')).not.toContain(VARIANT_STYLE_SUFFIX)
    })
  })

  it('uses the current theme from ThemeProviderContext for custom variant classes', () => {
    setupOsAndStyleMocks(false)
    mockThemeValue.value = 'dark'

    const variant: string = 'highlight'
    const wrapper = mountComponent({
      keyboardKey: 'k',
      variant,
    })
    const kbd = wrapper.find('kbd')

    expect(injectThemeProviderContext).toHaveBeenCalledWith()
    expect(mocks.mockGetCustomComponentVariant).toHaveBeenCalledWith('keyboardKey', 'dark', { variant })
    expect(kbd.classes()).toContain(BASE_STYLE_CLASS)
    expect(kbd.classes()).toContain(`${VARIANT_STYLE_SUFFIX}-${variant}`)
    expect(kbd.classes()).toContain(`${variant}-${CUSTOM_VARIANT_FROM_THEME_SUFFIX}-dark`)
  })
})
