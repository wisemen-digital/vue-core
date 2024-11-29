import {
  computed,
  type ComputedRef,
  ref,
} from 'vue'

import type { ButtonProps } from '@/components/button/button/button.props'
import { useIconButtonStyle } from '@/components/button/icon-button/iconButton.style'

interface UseIconButtonOptions {
  isDisabled: ComputedRef<boolean>
  isLoading: ComputedRef<boolean>
  size: ComputedRef<ButtonProps['size']>
  variant: ComputedRef<ButtonProps['variant']>
  onClick: (event: Event) => void
}

interface UseIconButtonReturnType {
  baseClasses: ComputedRef<string>
  iconClasses: ComputedRef<string>
  loaderBoxClasses: ComputedRef<string>
  loaderClasses: ComputedRef<string>
  tooltipClasses: ComputedRef<string>
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

export function useIconButton(options: UseIconButtonOptions): UseIconButtonReturnType {
  const iconButtonStyle = useIconButtonStyle()

  const isFocused = ref<boolean>(false)
  const isMouseOver = ref<boolean>(false)
  const isActive = ref<boolean>(false)
  const isHovered = computed<boolean>(() => isMouseOver.value && !options.isDisabled.value)

  const baseClasses = computed<string>(() => iconButtonStyle.base({
    isActive: isActive.value,
    isDisabled: options.isDisabled.value,
    isFocused: isFocused.value,
    isHovered: isHovered.value,
    isLoading: options.isLoading.value,
    size: options.size.value,
    variant: options.variant.value,
  }))

  const iconClasses = computed<string>(() => iconButtonStyle.icon({
    isActive: isActive.value,
    isDisabled: options.isDisabled.value,
    isFocused: isFocused.value,
    isHovered: isHovered.value,
  }))

  const loaderBoxClasses = computed<string>(() => iconButtonStyle.loaderBox({
    isActive: isActive.value,
    isDisabled: options.isDisabled.value,
    isFocused: isFocused.value,
    isHovered: isHovered.value,
  }))

  const loaderClasses = computed<string>(() => iconButtonStyle.loader({
    isActive: isActive.value,
    isDisabled: options.isDisabled.value,
    isFocused: isFocused.value,
    isHovered: isHovered.value,
  }))

  const tooltipClasses = computed<string>(() => iconButtonStyle.tooltip())

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

    options.onClick(event)
  }

  return {
    baseClasses,
    iconClasses,
    loaderBoxClasses,
    loaderClasses,
    tooltipClasses,
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
