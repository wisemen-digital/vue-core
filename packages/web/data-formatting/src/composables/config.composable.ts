import { computed, ref } from "vue";

import type { Locale } from "@/models/locale.model";

export interface StringFormatConfig {
  /**
   * The locale to use for locale-aware string formatting (e.g. list formatting, pluralization).
   * If not provided, the browser's default locale will be used.
   */
  locale: Locale;
}

const DEFAULT_CONFIG: StringFormatConfig = {
  locale: navigator.language,
};

const config = ref<StringFormatConfig>(DEFAULT_CONFIG);

function update(updatedConfig: Partial<StringFormatConfig>): void {
  config.value = {
    ...config.value,
    ...updatedConfig,
  };
}

export function useStringFormatConfig() {
  return {
    locale: computed<Locale>(() => config.value.locale),
    update,
  };
}
