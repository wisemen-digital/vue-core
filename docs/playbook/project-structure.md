# Project Structure

The recommend project structure for medium to large application is a hybrid between the split-by-type and split-by-module. All the folders in the `src` (root) contain shared code. (
services, stores, types, ...)

The module folder contains multiple folders grouped by "features" eg. **employees**. Each module contains all of the different types.

```bash
- src
  - services (shared services)
    - example.service.ts
    - ...
  - components (shared components)
    - TheHeader.vue
    - TheFooter.vue
    - ...
  - icons
  - composables (shared composables)
    - saving.ts
    - ...
  - types
    -
  - models
    - customer
      - index
        - customerIndexFilter.model.ts
        - customerIndex.model.ts
        - customerIndexDto.model.ts
      - detail
        - customer.model.ts
        - customerDto.model.ts
      - create
        - customerCreateDto.model.ts
        - customerCreateForm.model.ts
      - update
        - customerUpdateForm.model.ts
        - customerUpdateDto.model.ts
      - customerUuid.model.ts
      - customer.transformer.ts
  - modules
    - customers
        - features
            - create
            - overview
            - detail
              - composables
              - components
                - CustomerDetailDocumentsTable.vue
                - CustomerDetailPlanningCalendar.vue
                - CustomerDetailInfo.vue
              - views
                - CustomerDetailView.vue
                - CustomerDetailDocumentsView.vue
                - CustomerDetailPlanningView.vue
        - services
            - customer.service.ts
        - queries
        - mutations
        - composables
            - ...
        - ...
  - router
  - stores (shared stores)
  - types (shared types)
  - views (shared views)
    - Error404View.vue
    - ...
  - main.ts
```

## Shared components folder structure

Each project is always going to contain multiple components that are shared accross multiple modules and views.
The recommended structure is to have a finite number of root folders like `app`, `form`, `table`, `layout`, ...
Each folder contains the matching component type eg. `AppButton.vue` or `FormInput.vue`.
It's also a good practice to give each component it's own folder so that you can add story (Storybook/Histoire) or test files.

```bash
- assets
- components
    - app
        - button
            - AppButton.vue
            - AppButton.story.ts
            - AppButton.spec.ts
        - card
            - AppCard.vue
            - AppCard.story.ts
            - title
                - AppCardTitle.vue
                - AppCardTitle.story.ts
    - form
        - select
            - FormSelect.vue
            - FormSelect.story.ts
            - FormSelect.spec.ts
        - birthday-picker
            - FormBirthdayPicker.vue
            - FormBirthdayPicker.story.ts
    - calendars
        - planning
            - CalendarPlanning.vue
            - CalendarPlanning.story.ts
- composables
- ...
```
