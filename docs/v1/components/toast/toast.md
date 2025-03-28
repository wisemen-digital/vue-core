# Toast

## Use cases

<BulletList
  :items="[
    {
      description: 'When you need to provide brief, non-intrusive feedback to the user (ex: successful action, such as saving a form or completing a task).',
      variant: 'good',
    },
    {
      description: 'When displaying long, detailed messages that require user reading time.',
      variant: 'bad',
    },
  ]"
/>


## Import

```ts
import { useToast } from '@wisemen/vue-core'
```

<!-- @include: ./toast-meta.md -->


## Examples

### Info toast
Using the toast component to display an informative message.

<ComponentPreview name="toast/info" />

### Error toast
Using the toast component to display an error message.

<ComponentPreview name="toast/error" />

### Succes toast
Using the toast component to display a success message.

<ComponentPreview name="toast/success" />

<br>
<br>

# Tooltip Container
Import the container in your App.vue to render the tooltips as intended within the application.

## Import tooltip container

```ts
import { VcToastContainer } from '@wisemen/vue-core'
```
