#### [Components](/playbook/components.md)

# Naming conventions

When naming your components, you should always follow these conventions.

## Use PascalCase

Use PascalCase for naming your components. This will make it easier to read and will prevent conflicts with HTML elements.

```vue
<template>
  <ExampleComponent />
</template>
```

## Use long names

Use long names for your components. This will make it easier to understand what the component is for.

> A good practice is to follow your folder structure. This will make it easier to find the component you are looking for.

Example:

```vue
<template>
  <EmployeeDetailEmploymentView />
</template>
```

## Use the component type as a suffix

Use the component type as a suffix. This will make it easier to understand what the component is for.

Example:

```vue
<template>
  <div>
    <FormDropdown />
    <FormCurrencyInput />
    <FormSelectButton />
  </div>
</template>
```

## Prefix with the module name

Use the folder or module name to prefix your component. This is especially useful when creating a library of components.

Example:

```vue
<template>
  <div>
    <AppButton />
    <AppGrid />
    <FormDropdown />
    <FormCurrencyInput />
  </div>
</template>
```
