# Select

Displays a list of options for the user to pick from. Depending on the type of your model, the user will be able to select one or multiple values

This component is build on top of the [Form Field](/packages/components-next/components/form-field/form-field.html) component.

<ComponentPreview name="select/examples/main" />

## Anatomy

### VcSelect
```vue
<script setup lang="ts">
// Only those components can be imported
import {
  VcFormField,
  VcSelectBase,
  VcSelectBaseSingle,
  VcSelectBaseMultiple,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcFormField>
    <VcSelectRoot>
      <VcSelectPopover>
        <template #anchor>
          <slot name="anchor" />
        </template>

        <template #inline-content>
          <SelectIconLeft />
          <VcSelectBase>
            <VcSelectBaseSingle /> OR <VcSelectBaseMultiple />
          </VcSelectBase>
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
      </VcSelectPopover>
    </VcSelectRoot>
  </VcFormField>
</template>
```

### VcSelectItem
```vue
<script setup lang="ts">
import {
  VcSelectItem,
  VcSelectItemIndicator,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcSelectItem>
    <VcSelectItemIndicator />
  </VcSelectItem>
</template>
```

<!-- @include: ./select-meta.md -->

## Examples

### Disabled

<ComponentPreview name="select/examples/disabled" />

### Error

<ComponentPreview name="select/examples/error" />

### Loading

<ComponentPreview name="select/examples/loading" />

### Multiple

<ComponentPreview name="select/examples/multiple" />

### Filters

<ComponentPreview name="select/examples/filter" />

### Remain open on select

<ComponentPreview name="select/examples/remain-open-on-select" />

### Virtual List

<ComponentPreview name="select/examples/virtual-list" />

### Customize value

<ComponentPreview name="select/examples/customize" />