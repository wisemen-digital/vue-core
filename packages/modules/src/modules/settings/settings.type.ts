import type { Icon } from '@wisemen/vue-core-components'
import type { Component } from 'vue'

export interface SettingsSection {
  id: string
  title: string
  description: string
  tags: string[]
  component: () => Component
}

export interface SettingsView {
  id: string
  title: string
  description?: string
  icon: Icon
  sections: SettingsSection[]
}

export interface SettingsCategory {
  title: string
  views: SettingsView[]
}

export interface SettingsConfig {
  categories: SettingsCategory[]
}

export type ViewIdFromConfig<T extends SettingsConfig> =
  T['categories'][number]['views'][number]['id']
