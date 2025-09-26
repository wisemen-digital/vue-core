# Toast

Component used to inform users of events or actions, such as success messages or error alerts. Toasts are triggered programmatically using the `useVcToast` composable.

You will also need to add this in your App.vue
```vue
// import { VcToastContainer } from '@wisemen/vue-core-components'

<VcToastContainer />
```

<ComponentPreview name="toast/examples/main" />

<!-- @include: ./toast-meta.md -->

## Examples

### Error toast
<ComponentPreview name="toast/examples/error" />

### Success toast
<ComponentPreview name="toast/examples/success" />

### Info toast
<ComponentPreview name="toast/examples/info" />
