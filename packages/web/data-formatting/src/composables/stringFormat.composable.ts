import { useDataFormatConfig } from '@/composables/config.composable'

export function useStringFormat() {
  const {
    locale,
  } = useDataFormatConfig()

  /**
   * Format an array of strings into a human-readable list.
   * Uses Intl.ListFormat for locale-aware formatting.
   * E.g., ["a", "b", "c"] → "a, b, and c" (en) or "a, b en c" (nl).
   */
  function toList(
    items: string[],
    type: Intl.ListFormatType = 'conjunction',
  ): string {
    const formatter = new Intl.ListFormat(locale.value, {
      style: 'long',
      type,
    })

    return formatter.format(items)
  }

  /**
   * Create a locale-aware string comparator for sorting.
   * Handles diacritics, special characters, and locale-specific ordering.
   * E.g., [...names].sort(compare())
   */
  function compare(options?: Intl.CollatorOptions): (a: string, b: string) => number {
    const collator = new Intl.Collator(locale.value, options)

    return collator.compare
  }

  /**
   * Select the appropriate plural form based on count.
   * Uses Intl.PluralRules for locale-aware plural categories.
   * E.g., toPlural(1, { one: 'item', other: 'items' }) → "item"
   */
  function toPlural(
    count: number,
    forms: Partial<Record<Intl.LDMLPluralRule, string>>,
  ): string {
    const rules = new Intl.PluralRules(locale.value)
    const category = rules.select(count)

    return forms[category] ?? forms.other ?? ''
  }

  return {
    compare,
    toList,
    toPlural,
  }
}
