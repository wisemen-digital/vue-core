import type { DefaultTheme } from 'vitepress'

import { API_UTILS_NAVIGATION } from './api-utils/apiUtils.navigation'
import { COMPONENTS_DOC_NAVIGATION } from './components/components.navigation'
import { ESLINT_NAVIGATION } from './eslint/eslint.navigation'

type SidebarWithIcon = DefaultTheme.SidebarItem & {
  icon?: string
  items?: SidebarWithIcon[]
}

export interface PackageDocNavigation {
  title: string
  link: string
  sidebar: SidebarWithIcon[]
  path: string
}

export type NavItem = (DefaultTheme.NavItemChildren | DefaultTheme.NavItemComponent | DefaultTheme.NavItemWithLink)

export const PACKAGE_DOC_NAVIGATION: PackageDocNavigation[] = [
  COMPONENTS_DOC_NAVIGATION,
  API_UTILS_NAVIGATION,
  ESLINT_NAVIGATION,
]

function toFullPackagePath({
  path, link,
}: {
  link: string
  path: string
}): string {
  return `/packages/${path}/${link}`
}

function getIconWithText(item: SidebarWithIcon): string {
  if (item.text == null) {
    return ''
  }
  if (item.icon == null) {
    return item.text
  }

  return `<span class="nav-icon-with-text" style="display: flex; align-items: center; gap: 0.5em;">
    <span class="nav-icon">${item.icon}</span>
    <span class="nav-text">${item.text}</span>
  </span>`
}

export function sidebarWithIconToDefaultThemeSidebarItem(item: SidebarWithIcon): DefaultTheme.SidebarItem {
  return {
    ...item,
    text: getIconWithText(item),
    items: item.items?.map((subItem) => sidebarWithIconToDefaultThemeSidebarItem(subItem)),
  }
}

function sidebarItemToFullPath(item: DefaultTheme.SidebarItem, packagePath: string): DefaultTheme.SidebarItem {
  return {
    ...item,
    text: getIconWithText(item),
    link: item.link
      ? toFullPackagePath({
          path: packagePath,
          link: item.link,
        })
      : undefined,
    items: item.items?.map((subItem) => sidebarItemToFullPath(subItem, packagePath)),
  }
}

export function getPackagesNavigation(): NavItem[] {
  return PACKAGE_DOC_NAVIGATION.map((pkg) => ({
    text: pkg.title,
    link: toFullPackagePath(pkg),
  }))
}

export function getPackagesSidebar(): DefaultTheme.SidebarMulti {
  const transformedSidebar = PACKAGE_DOC_NAVIGATION.reduce((acc, pkg) => {
    const packagePath = `packages/${pkg.path}`

    acc[packagePath] = pkg.sidebar.map((item) => sidebarItemToFullPath(item, pkg.path))

    return acc
  }, {} as DefaultTheme.SidebarMulti)

  return transformedSidebar
}
