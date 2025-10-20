import type { RadioGroupProps } from '@/components/radio-group/radioGroup.props'

export { default as VcRadioGroupRoot } from '@/components/radio-group/parts/RadioGroupRoot.vue'
export type VcRadioGroupProps = Omit<RadioGroupProps, 'classConfig' | 'size' | 'variant'>
export { default as VcRadioGroup } from '@/components/radio-group/RadioGroup.vue'
