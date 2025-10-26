#### [Components](/playbook/components.md)

# Slots

Slots are the way to other components to your components. This can be used to create reusable components that can be used in different ways or overwrite the default behaviour.

For defining slots there are a few best practices to follow.

## Keep it simple

Try to keep your slots as simple as possible. This will make it easier to use your component. If you have a component that has a lot of slots, it might be a good idea to split it up into multiple components.

> Most of the time you can use props to pass data to your component. This will make the user of your component easier and less prone to error.

## Use slots to predefine the content of an component

If you have a component where the layout is always the same, but the content is different, you can use slots to predefine the layout. This will make it easier to use your component.

```vue
<template>
  <div class="bg-primary">
    <slot name="header" />
    <div class="border-b py-2" />

    <slot name="content" />

    <div class="border-t bg-secondary">
      <slot name="footer" />
    </div>
  </div>
</template>
```

## Use slots to overwrite the default behaviour

If you have a dropdown component, you can use slots to overwrite the implementation of the dropdown options.

```vue
<template>
  <FormDropdown
    v-model="countries"
  >
    <template
      #option="{ data }"
    >
      <p>{{ data.name }}</p>
      <p class="text-sm text-gray-500">
        {{ data.code }}
      </p>
    </template>
  </FormDropdown>
</template>
```

## Slots are a powerful way to create layouts and wrappers

If you have a layout on your page that is always the same, but the content is different, you can use slots to create a layout component. This will make it easier to create new pages.

```vue
<!--AppLayout.vue-->
<template>
  <div class="px-10 py-5 bg-primary">
    <slot />
  </div>
</template>
```
