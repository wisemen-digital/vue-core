# Select

Displays a list of options for the user to pick from.

This component is build on top of the [Form Field](/packages/components-next/components/form-field/form-field.html) component.

<ComponentPreview name="select/examples/main" />

## Anatomy <badge type="warning">Unstable</badge>

API may change before stable release. As a result, some components are not yet exported.

```vue
<script setup lang="ts">
import {
  SelectRoot,
  SelectPopover,
  SelectIconLeft,
  SelectBase,
  SelectIconRight,
  SelectLoader,
  SelectDropdownSearchInput,
  SelectContent,
  SelectVirtualList,
  SelectEmpty,
} from '@wisemen/vue-core-components'
</script>

<template>
  <FormField>
    <SelectRoot>
      <SelectPopover>
        <template #anchor>
          <slot name="anchor" />
        </template>

        <template #inline-content>
          <SelectIconLeft />
          <SelectBase />
          <SelectIconRight />
          <SelectLoader />
        </template>

        <template #content>
          <SelectDropdownSearchInput />

          <SelectContent>
            <SelectVirtualList />
            <slot />
            <SelectEmpty />
          </SelectContent>
        </template>
      </SelectPopover>
    </SelectRoot>
  </FormField>
</template>
```

## Examples

### Disabled

<ComponentPreview name="select/examples/disabled" />

### Loading

<ComponentPreview name="select/examples/loading" />

### Multiple

<ComponentPreview name="select/examples/multiple" />

### Icons

<ComponentPreview name="select/examples/icons" />

### Filter

<ComponentPreview name="select/examples/filter" />

### Inline filter

<ComponentPreview name="select/examples/inline-filter" />

### Remain open on select

<ComponentPreview name="select/examples/remain-open-on-select" />

### Virtual List

<ComponentPreview name="select/examples/virtual-list" />

### Customize value <badge type="warning">Unstable</badge>

<ComponentPreview name="select/examples/customize-value" />

<!-- @include: ./select-meta.md -->