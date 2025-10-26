#### [Components](/playbook/components.md)

# Smart vs Dumb

When writing components, you should always try to split them into smart and dumb components.
This will make your components easier to understand and maintain when adding or changing functionality.

## Smart components (container)

Smart components are usually the "views" of your application and are rendered by the router. They are responsible for handling user interaction and passing data to dumb components.

- Imports all of your stores, router, services, ...
- Contain heavy business logic
- Contain little to no presentation logic in their template
- Are focused on passing data to dumb components
- Are focused on handling emits from dumb components

Example:

```vue
<!--EmployeesView.vue-->
<script lang="ts">
const router = useRouter()

const indexQuery = useEmployeeIndexQuery()

function onButtonClick(uuid: string): void {
  router.push('/example');
}
</script>

<template>
  <EmployeesTable
     :employees="indexQuery.data.items"
     @row:click="onEmployeeItemClick"
  />
</template>
```

## Dumb components (presentational)

Dumb components are usually rendered by smart components. They are responsible for rendering data and emitting events.

- Pure input & output (props & emits)
- Never contain any import of a router, store, service, ...
  - This will prevent them from being dependent on the context they are used in
  - This will make them easier to test, reuse and understand
- Are focused on rendering data, handling user interaction and emitting events

Example:

```vue
<!--EmployeesTable.vue-->
<script lang="ts">

const props = defineProps<{
  employees: Employee[],
}>();

const emit = defineEmits<{
  (e: 'row:click', value: Person),
}>();

const onRowClick = (employee: Employee): void => {
  emit('row:click', employee);
}

</script>

<template>
  <table>
    <tr v-for="employee in employees" @click="onRowClick(employee)">
      <td>{{ employee.name }}</td>
      <td>{{ employee.age }}</td>
    </tr>
  </table>
</template>
```
