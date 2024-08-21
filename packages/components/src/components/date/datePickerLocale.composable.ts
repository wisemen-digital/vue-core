import {
  enUS,
  fr,
  type Locale,
  nlBE,
} from 'date-fns/locale'
import { computed, type ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'

interface UseDatePickerLocaleReturnType {
  current: ComputedRef<Locale>
}

export function useDatePickerLocale(): UseDatePickerLocaleReturnType {
  const i18n = useI18n()

  const locales = new Map<string, Locale>([
    [
      'nl-BE',
      nlBE,
    ],
    [
      'en-US',
      enUS,
    ],
    [
      'fr-FR',
      fr,
    ],
  ])

  const current = computed<Locale>(() => {
    return locales.get(i18n.locale.value) ?? enUS
  })

  return {
    current,
  }
}
