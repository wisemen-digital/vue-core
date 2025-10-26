# Naming conventions

You know what’s the most annoying thing in programming? Naming things. 🥲 So let’s get ourselves some standards and never
think about it ever again.

## File names

A great way to quickly find things in your IDE is being searching directly by file name. A simple way to improve your
experience is to suffix your components with their function.

| Type         | Example              |
| ------------ | -------------------- |
| **types**    | `example.type.ts`    |
| **services** | `example.service.ts` |
| **stores**   | `example.store.ts`   |
| **routes**   | `example.routes.ts`  |
| **views**    | `ExampleView.ts`     |

## File name casing

- **folders**: kebab-case eg. `my-example-folder`
- **.ts files**: camelCase eg. `exampleCenter.ts`
- **.vue files**: PascalCase eg. `MyComponent.vue`

## Object name casing

| Type                       | Casing               | Example                |
| -------------------------- | -------------------- | ---------------------- |
| **services**               | PascalCase           | `ExampleService`       |
| **stores**                 | use + PascalCase     | `useExampleStore`      |
| **composables**            | use + PascalCase     | `useExampleComposable` |
| **types**                  | PascalCase           | `ExampleType`          |
| **routes**                 | PascalCase           | `ExampleRoutes`        |
| **variable names**         | camelCase            | `exampleVariable`      |
| **function names**         | camelCase            | `exampleFunction`      |
| **constants**              | UPPERCASE_SNAKE_CASE | `MY_CONSTANT`          |
| **components in template** | PascalCase           | `<MyComponent />`      |
| **translation key**        | snake_case           | `my_key`               |
| **route paths**            | kebab-case           | `/example-route`       |
| **booleans**               | is/has + camelCasing | `isVisible`            |

## Component names

### Two words.

Always. and I do mean always. Give. Your. Components. Two. Word. Names.

| ❌ Bad examples | ✅ Good examples |
| --------------- | ---------------- |
| Table.vue       | BaseTable.vue    |
| Button.vue      | AppButton.vue    |
| Input.vue       | FormInput.vue    |

### The longer the better 🍆

When creating components that are tightly coupled with a view or module. Always prefix your component with the name of
the module.

| ❌ Bad examples       | ✅ Good examples                |
| --------------------- | ------------------------------- |
| InformationStep.vue   | ClientUpdateInformationStep.vue |
| Calendar.vue          | ContractCreateCalendar.vue      |
| DetailInformation.vue | EmployeeDetailInformation.vue   |
