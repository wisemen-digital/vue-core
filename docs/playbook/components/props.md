#### [Components](/playbook/components.md)

# Props

Props are the input of a component. They are used to pass data to the component.
These props are immutable and can't be changed by the component itself
(unless you configure them as model props).

## Typescript constructor

Use the Typescript constructor to define your props.
This will give you the best intellisense and type checking.

```typescript
const props = defineProps<{
  name: string,
  age: number,
  address: Address,
}>();
```

## With default values

When using the typescript constructor, you can define default values.

```typescript
const props = withDefaults(defineProps<{
    age: number,
    name: string,
    address: Address,
}>(), {
    name: 'John Doe',
    age: 18,
    address: {
        street: 'Main street',
        number: 123,
        city: 'New York',
    },
});
```

## Boolean props should be prefixed

Prefixing props with `is` or `has` makes it clear that the prop is a flag that expects a boolean value.

```typescript
const props = defineProps<{
  isDisabled: boolean,
  hasError: boolean,
  isVisible: boolean,
  hasContainer: boolean,
}>();
```

## Optional flags should always be false by default

When you have an optional boolean prop, it's good practice to set it default to false.

- This will prevent you from having to write inverted logic.
- This makes it clear for the user of your component that the prop is optional and that it's default value is false.

```typescript
const props = defineProps<{
  isDisabled?: boolean,
  hasError?: boolean,
}>();
```
