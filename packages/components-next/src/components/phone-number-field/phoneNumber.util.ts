import i18nCountries from 'i18n-iso-countries'
import type { CountryCode } from 'libphonenumber-js'

export function getCountryFlagUrl(countryCode: CountryCode): string | null {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`
}

export function getCountryName(countryCode: CountryCode, locale: string): string | null {
  return i18nCountries.getName(countryCode, locale, { select: 'official' }) ?? null
}
