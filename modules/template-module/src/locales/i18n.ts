/**
 * Template Module Translations Index
 * Aggregates all locale translations
 */

import { en } from './en'
import { es } from './es'
import { fr } from './fr'

export { en, es, fr }

export const templateModuleTranslations = {
  en,
  es,
  fr,
} as const

export type TemplateModuleLocale = keyof typeof templateModuleTranslations
export type TemplateModuleTranslationKey = keyof typeof en

export default templateModuleTranslations
