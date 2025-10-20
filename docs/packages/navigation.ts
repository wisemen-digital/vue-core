import type { DefaultTheme } from 'vitepress'

import { API_UTILS_NAVIGATION } from './api-utils/apiUtils.navigation'
import { COMPONENTS_DOC_NAVIGATION } from './components/components.navigation'
import { MAIN_DOC_NAVIGATION } from './main/main.navigation'

export interface PackageDocNavigation {
  title: string
  link: string
  sidebar: DefaultTheme.SidebarItem[]
  path: string
}

export type NavItem = (DefaultTheme.NavItemChildren | DefaultTheme.NavItemComponent | DefaultTheme.NavItemWithLink)

export const PACKAGE_DOC_NAVIGATION: PackageDocNavigation[] = [
  // Add new package docs here
  MAIN_DOC_NAVIGATION,
  COMPONENTS_DOC_NAVIGATION,
  API_UTILS_NAVIGATION,
]

function toFullPackagePath({
  path, link,
}: {
  link: string
  path: string
}): string {
  return `/packages/${path}/${link}`
}

function sidebarItemToFullPath(item: DefaultTheme.SidebarItem, packagePath: string): DefaultTheme.SidebarItem {
  return {
    ...item,
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
