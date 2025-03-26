import type { CountryCode } from 'libphonenumber-js'

export function getCountryFlagUrl(countryCode: CountryCode): string | null {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`
}

export function getCountryName(countryCode: CountryCode, _locale: string): string | null {
  // return getCountryData(countryCode).getName(countryCode, locale, { select: 'official' }) ?? null

  // const data = getCountryData(countryCode as any)
  // return data.name

  return countryCode
}
