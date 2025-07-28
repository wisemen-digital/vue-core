# Tabs

A set of layered sections of content—known as tab panels—that are displayed one at a time.

## Use cases

<BulletList
  :items="[
    {
      description: 'When you want to provide quick navigation between different content.',
      variant: 'good',
    },
    {
      description: 'When the number of tabs is excessive, making it difficult to navigate (prefer using an accordion).',
      variant: 'bad',
    },
  ]"
/>

## Import

```ts
import { VcTabs } from '@wisemen/vue-core'
```

<!-- @include: ./tabs-meta.md -->

<br>
<br>

# Tabs content

## Import tabs content

```ts
import { VcTabsContent } from '@wisemen/vue-core'
```
<!-- @include: ./tabs-content-meta.md -->

## Examples

### Basic usage
The most basic usage of the tabs component.

<ComponentPreviewV1 name="tabs/basic" />
