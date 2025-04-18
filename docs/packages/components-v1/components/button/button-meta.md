<!-- This file is automatically generated, do not edit manually. -->

## Props

| Prop | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| iconLeft | `keyof Icons \| null` | The left icon of the button. | `null` |
| iconRight | `keyof Icons \| null` | The right icon of the button. | `null` |
| isDisabled | `boolean` | Whether the button is disabled. | `false` |
| isLoading | `boolean` | Whether the button is in a loading state. | `false` |
| size | `"default" \| "2xl" \| "lg" \| "sm" \| "xl"` | The size of the button. | `"default"` |
| styleConfig | `Partial<ButtonStyleConfig> \| null` | The style config of the component. | `null` |
| testId | `string \| null` | The test id of the button. | `null` |
| type | `"button" \| "reset" \| "submit"` | The type of the button. | `"button"` |
| variant | `"default" \| "destructive-primary" \| "destructive-secondary" \| "destructive-tertiary" \| "secondary" \| "secondary-color" \| "tertiary" \| "tertiary-color"` | The variant of the button. | `"default"` |


## Slots

| Slot | Slot Props | Description |
| --------- | ---- | ----------- |
| default | `-` | The content to display in the button. |
| icon-left | `{ iconLeft: keyof Icons; }` | The content to display on the left side of the button. |
| icon-right | `{ iconRight: keyof Icons; }` | The content to display on the right side of the button. |
| loader | `-` | The content to display when the button is loading. |


## Events

| Event name | Type | Description |
| ---------- | ---- | ----------- |
| `click` | [event: Event] |  |


## Style configuration

The following interfaces are defined in the component’s style configuration file:

#### ButtonStyleConfig

```ts
export interface ButtonStyleConfig extends BaseStyleConfig {
'--button-bg-color-active': string
  '--button-bg-color-default': string
  '--button-bg-color-disabled': string
  '--button-bg-color-focus': string
  '--button-bg-color-hover': string
  '--button-border-color-active': string
  '--button-border-color-default': string
  '--button-border-color-disabled': string
  '--button-border-color-focus': string
  '--button-border-color-hover': string
  '--button-border-radius-default': string
  '--button-font-size-default': string
  '--button-font-weight-default': string
  '--button-height-default': string
  '--button-icon-color-active': string
  '--button-icon-color-default': string
  '--button-icon-color-disabled': string
  '--button-icon-color-focus': string
  '--button-icon-color-hover': string
  // Spacing between icon and text. To change the spacing between icon and border,
  // refer to `--button-padding-left-default`
  '--button-icon-left-spacing-default': string
  // Spacing between icon and text. To change the spacing between icon and border,
  // refer to `--button-padding-right-default`
  '--button-icon-right-spacing-default': string
  '--button-icon-size-default': string
  '--button-justify-content-default': string
  '--button-loader-color-active': string
  '--button-loader-color-default': string
  '--button-loader-color-disabled': string
  '--button-loader-color-focus': string
  '--button-loader-color-hover': string
  '--button-loader-size-default': string
  '--button-padding-left-default': string
  '--button-padding-right-default': string
  '--button-ring-color-focus': string
  '--button-ring-offset-color-focus': string
  '--button-shadow-active': string
  '--button-shadow-default': string
  '--button-shadow-disabled': string
  '--button-shadow-focus': string
  '--button-shadow-hover': string
  '--button-text-color-active': string
  '--button-text-color-default': string
  '--button-text-color-disabled': string
  '--button-text-color-focus': string
  '--button-text-color-hover': string
}
```

