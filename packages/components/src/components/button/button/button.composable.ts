import { useEventListener } from '@vueuse/core'
import type { ComputedRef } from 'vue'
import {
  computed,
  ref,
} from 'vue'

import type { ButtonProps } from '@/components/button/button/button.props'
import { useButtonStyle } from '@/components/button/button/button.style'

interface UseButtonOptions {
  isDisabled: ComputedRef<boolean>
  isLoading: ComputedRef<boolean>
  size: ComputedRef<ButtonProps['size']>
  variant: ComputedRef<ButtonProps['variant']>
  onClick?: (event: Event) => void
}

interface UseButtonReturnType {
  baseClasses: ComputedRef<string>
  iconLeftClasses: ComputedRef<string>
  iconRightClasses: ComputedRef<string>
  loaderBoxClasses: ComputedRef<string>
  loaderClasses: ComputedRef<string>
  onBlur: () => void
  onClick: (event: Event) => void
  onFocus: () => void
  onKeyDown: (event: KeyboardEvent) => void
  onKeyUp: (event: KeyboardEvent) => void
  onMouseDown: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  onMouseUp: () => void
}

export function useButton(options: UseButtonOptions): UseButtonReturnType {
  const buttonStyle = useButtonStyle()

  const isFocused = ref<boolean>(false)
  const isMouseOver = ref<boolean>(false)
  const isActive = ref<boolean>(false)
  const isHovered = computed<boolean>(() => isMouseOver.value && !options.isDisabled.value)

  const baseClasses = computed<string>(() => buttonStyle.base({
    isActive: isActive.value,
    isDisabled: options.isDisabled.value,
    isFocused: isFocused.value,
    isHovered: isHovered.value,
    isLoading: options.isLoading.value,
    size: options.size.value,
    variant: options.variant.value,
  }))

  const iconLeftClasses = computed<string>(() => buttonStyle.iconLeft({
    isActive: isActive.value,
    isDisabled: options.isDisabled.value,
    isFocused: isFocused.value,
    isHovered: isHovered.value,
  }))

  const iconRightClasses = computed<string>(() => buttonStyle.iconRight({
    isActive: isActive.value,
    isDisabled: options.isDisabled.value,
    isFocused: isFocused.value,
    isHovered: isHovered.value,
  }))

  const loaderBoxClasses = computed<string>(() => buttonStyle.loaderBox({
    isActive: isActive.value,
    isDisabled: options.isDisabled.value,
    isFocused: isFocused.value,
    isHovered: isHovered.value,
  }))

  const loaderClasses = computed<string>(() => buttonStyle.loader({
    isActive: isActive.value,
    isDisabled: options.isDisabled.value,
    isFocused: isFocused.value,
    isHovered: isHovered.value,
  }))

  function onFocus(): void {
    isFocused.value = true
  }

  function onBlur(): void {
    isFocused.value = false
  }

  function onMouseEnter(): void {
    isMouseOver.value = true
  }

  function onMouseLeave(): void {
    isMouseOver.value = false
  }

  function onMouseDown(): void {
    isActive.value = true
  }

  function onMouseUp(): void {
    isActive.value = false
  }

  function onKeyDown(event: KeyboardEvent): void {
    if (event.key === ' ' || event.key === 'Enter') {
      isActive.value = true
    }
  }

  function onKeyUp(event: KeyboardEvent): void {
    if (event.key === ' ' || event.key === 'Enter') {
      isActive.value = false
    }
  }

  function onClick(event: Event): void {
    if (options.isLoading.value) {
      return
    }

    options.onClick?.(event)
  }

  useEventListener('mouseup', onMouseUp)

  return {
    baseClasses,
    iconLeftClasses,
    iconRightClasses,
    loaderBoxClasses,
    loaderClasses,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
  }
}
