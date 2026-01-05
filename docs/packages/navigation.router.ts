import { API_UTILS_NAVIGATION } from './api-utils/apiUtils.navigation'
import { COMPONENTS_DOC_NAVIGATION } from './components/components.navigation'
import { ESLINT_NAVIGATION } from './eslint/eslint.navigation'
import type { PackageDocNavigation } from './navigation.utils'
import { TELEMETRY_NAVIGATION } from './telemetry/telemetry.navigation'

export const PACKAGE_DOC_NAVIGATION: PackageDocNavigation[] = [
  COMPONENTS_DOC_NAVIGATION,
  API_UTILS_NAVIGATION,
  ESLINT_NAVIGATION,
  TELEMETRY_NAVIGATION,
]
