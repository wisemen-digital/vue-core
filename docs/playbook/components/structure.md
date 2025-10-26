#### [Components](/playbook/components.md)

# Structure

When writing components, you should always follow this structure.

| Element                | Example                                                       |
| ---------------------- | ------------------------------------------------------------- |
| 1. Imports             | `import { defineProps, defineEmits } from 'vue';`             |
| 2. Props               | `const props = defineProps<{value: Person}>();`               |
| 3. Emits               | `const emit = defineEmits<{(e: 'change', value: Person)}>();` |
| 4. Composable          | `const { isLoading } = useLoading()`                          |
| 5. Refs                | `const isLoading = ref<boolean>(false)`                       |
| 6. Computed properties | `const isLoading = computed<boolean>(() => {})`               |
| 7. Methods             | `initForm() {}`                                               |
| 8. Lifecycle hooks     | `onMounted(() => {})`                                         |
| 9. defineExpose        | `defineExpose({})`                                            |
| 10. Template           | `<template>`                                                  |
| 11. Styles             | `<style scoped>`                                              |

Example of a well-structured component:

```vue
<script lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  value: Person,
}>();

const emit = defineEmits<{
  (e: 'change', value: Person),
}>();

const employeeStore = useEmployeeStore();

const employeeForm = ref<EmployeeForm>({
  firstName: ''
});

const isLoading = computed<boolean>(() => {
  return employeeStore.isLoading;
});

const initForm = () => {
  employeeForm.value = {
    firstName: ''
  };
};

onMounted(() => {
  initForm();
});

defineExpose({
  initForm,
});
</script>

<template>
  <section>
    <form class="space-y-2">
      <FormInput
          v-model="employeeForm.firstName"
          label="First name"
      />
      <button @click="initForm">Add Employee</button>
    </form>
  </section>
</template>

<style scoped>
button {
  background-color: black;
}
</style>
```
