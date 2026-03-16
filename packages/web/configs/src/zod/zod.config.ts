import type { Composer } from 'vue-i18n'
import z from 'zod'

export const DEFAULT_ZOD_CONFIG_LOCALES = {
  'en-US': {
    'package.configs.validation.invalid_uuid': 'Invalid UUID',
    'package.configs.validation.invalid_date': 'Invalid date',
    'package.configs.validation.invalid_time': 'Invalid time',
    'package.configs.validation.too_big_date': 'Must be before {count}',
    'package.configs.validation.too_small_date': 'Must be after {count}',
    'package.configs.validation.invalid_datetime': 'Invalid date and time',
    'package.configs.validation.invalid_email': 'Invalid email address',
    'package.configs.validation.invalid_regex': 'Invalid format',
    'package.configs.validation.invalid_string': 'Invalid input',
    'package.configs.validation.invalid_union': 'Invalid input',
    'package.configs.validation.invalid_url': 'Invalid URL',
    'package.configs.validation.required': 'This field is required',
    'package.configs.validation.too_big': 'Must be less than or equal to {count}',
    'package.configs.validation.too_big_array': 'Must contain a most {count} item | Must contain a most {count} items',
    'package.configs.validation.too_big_number': 'Must be less than or equal to {count}',
    'package.configs.validation.too_big_string': 'Must be at most {count} character | Must be at most {count} characters',
    'package.configs.validation.too_small': 'Must be greater than or equal to {count}',
    'package.configs.validation.too_small_array': 'Must contain at least {count} item | Must contain at least {count} items',
    'package.configs.validation.too_small_number': 'Must be greater than or equal to {count}',
    'package.configs.validation.too_small_string': 'Must be at least {count} character | Must be at least {count} characters',
  },
  'nl-BE': {
    'package.configs.validation.invalid_uuid': 'Ongeldige UUID',
    'package.configs.validation.end_date_after_start_date': 'Einddatum moet na de startdatum liggen',
    'package.configs.validation.incomplete_date_time': 'Zowel datum als tijd moeten ingevuld zijn of beide moeten leeg zijn',
    'package.configs.validation.invalid_date': 'Ongeldige datum',
    'package.configs.validation.invalid_time': 'Ongeldige tijd',
    'package.configs.validation.too_big_date': 'Datum mag niet later zijn dan {count}',
    'package.configs.validation.too_small_date': 'Datum moet {v} of later zijn',
    'package.configs.validation.invalid_datetime': 'Ongeldige datum en tijd',
    'package.configs.validation.invalid_email': 'Ongeldig e-mailadres',
    'package.configs.validation.invalid_url': 'Ongeldige URL',
    'package.configs.validation.required': 'Dit veld is verplicht',
    'package.configs.validation.too_big_array': 'Array mag maximaal {count} items bevatten',
    'package.configs.validation.too_big_number': 'Getal mag maximaal {count} zijn',
    'package.configs.validation.too_big_string': 'Tekst mag maximaal {count} tekens bevatten',
    'package.configs.validation.too_small_array': 'Array moet minstens {count} items bevatten',
    'package.configs.validation.too_small_number': 'Getal moet minstens {count} zijn',
    'package.configs.validation.too_small_string': 'Tekst moet minstens {count} tekens bevatten',
  },
} as const

export type ZodLocalesConfig = typeof DEFAULT_ZOD_CONFIG_LOCALES

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>
} : T

export function getZodConfigLocales(
  overrides?: DeepPartial<ZodLocalesConfig>,
): ZodLocalesConfig {
  if (!overrides) {
    return DEFAULT_ZOD_CONFIG_LOCALES
  }

  return {
    'en-US': {
      ...DEFAULT_ZOD_CONFIG_LOCALES['en-US'],
      ...overrides['en-US'],
    },
    'nl-BE': {
      ...DEFAULT_ZOD_CONFIG_LOCALES['nl-BE'],
      ...overrides['nl-BE'],
    },
  } as const
}

function configureZod(i18nInstance: Composer): void {
  z.config({
    customError: (iss) => {
      const {
        t,
      } = i18nInstance
      const isStringAndEmpty = iss.code === 'too_small' && iss.origin === 'string' && iss.minimum === 1
      const isInvalidType = iss.code === 'invalid_type'
      const isInvalidDiscriminator = iss.code === 'invalid_union'

      if (isStringAndEmpty || isInvalidType || isInvalidDiscriminator) {
        return t('package.configs.validation.invalid_string')
      }

      if (iss.code === 'invalid_format' && iss.format === 'email') {
        return t('package.configs.validation.invalid_email')
      }
      if (iss.code === 'invalid_format' && iss.format === 'url') {
        return t('package.configs.validation.invalid_url')
      }
      if (iss.code === 'invalid_format' && iss.format === 'date') {
        return t('package.configs.validation.invalid_date')
      }
      if (iss.code === 'invalid_format' && iss.format === 'time') {
        return t('package.configs.validation.invalid_time')
      }
      if (iss.code === 'invalid_format' && iss.format === 'datetime') {
        return t('package.configs.validation.invalid_datetime')
      }

      if (iss.code === 'too_big' && iss.origin === 'string') {
        return t('package.configs.validation.too_big_string', {
          count: iss.maximum,
        })
      }
      if (iss.code === 'too_big' && iss.origin === 'number') {
        return t('package.configs.validation.too_big_number', {
          count: iss.maximum,
        })
      }
      if (iss.code === 'too_big' && iss.origin === 'array') {
        return t('package.configs.validation.too_big_array', {
          count: iss.maximum,
        })
      }
      if (iss.code === 'too_big' && iss.origin === 'date') {
        return t('package.configs.validation.too_big_date', {
          count: iss.maximum,
        })
      }

      if (iss.code === 'too_small' && iss.origin === 'string') {
        return t('package.configs.validation.too_small_string', {
          count: iss.minimum,
        })
      }
      if (iss.code === 'too_small' && iss.origin === 'number') {
        return t('package.configs.validation.too_small_number', {
          count: iss.minimum,
        })
      }
      if (iss.code === 'too_small' && iss.origin === 'array') {
        return t('package.configs.validation.too_small_array', {
          count: iss.minimum,
        })
      }
      if (iss.code === 'too_small' && iss.origin === 'date') {
        return t('package.configs.validation.too_small_date', {
          v: iss.minimum,
        })
      }
    },
  })
}

export interface ZodConfigOptions {
  i18nInstance: Composer
}

export function zodConfig(options: ZodConfigOptions): void {
  configureZod(options.i18nInstance)
}
