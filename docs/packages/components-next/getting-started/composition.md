# Composition

## Thinking in Components

Each component is made up of multiple parts, with a **Root** component that provides context to all its children. This eliminates the need for prop drilling, making data flow more efficient.

Every styled part of a component includes a corresponding **stylable slot**, allowing you to easily override default styles.

### Button Component Breakdown

By default, you would use a button like this:

```html
<template>
  <Button>...</Button>
</template>
```

Behind the scenes, `<Button />` is composed as follows:

```vue
<template>
  <VcButtonRoot>
    <slot name="loader">
      <VcButtonLoader />
    </slot>

    <VcButtonContent>
      <slot name="icon-left">
        <VcButtonIconLeft />
      </slot>

      <slot />

      <slot name="icon-right">
        <VcButtonIconRight />
      </slot>
    </VcButtonContent>
  </VcButtonRoot>
</template>
```

Each part of the button is wrapped in a **named slot**, making it easy to override default content and replace it with custom elements. This approach ensures flexibility while maintaining a structured API.

### Customizing Nested Components

When working with nested components, you can apply the same approach. For example, if you want to add trailing content to the label of a `TextField`:

```vue
<template>
  <TextField>
    <template #label>
      <FormFieldLabel>
        <template #trailing>
          <!-- Custom trailing icon -->
        </template>
      </FormFieldLabel>
    </template>
  </TextField>
</template>
```

Notice that `<FormFieldLabel />` does not require explicit props to function correctly—this is because it inherits the necessary context from its **Root** component. This pattern keeps components adaptable, reusable, and easy to customize.
