<!-- This file was automatic generated. Do not edit it manually -->

<script setup>
import { createTableStyle } from "@wisemen/vue-core-components";
</script>

<PropsTable :data="[
  {
    'name': 'classConfig',
    'description': '<p>The class configuration for the component. This allows customizating the default styles\nby overriding them with custom values.</p>\n',
    'type': 'ResolvedClassConfig<\'table\'> | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'columns',
    'description': '<p>An array of column definitions that describe how to render each column.</p>\n',
    'type': 'TableColumn<unknown>',
    'required': true
  },
  {
    'name': 'data',
    'description': '<p>The paginated data to be displayed in the table.</p>\n',
    'type': 'null | PaginatedData<unknown>',
    'required': true
  },
  {
    'name': 'isFirstColumnSticky',
    'description': '<p>Makes the first column sticky (fixed) when horizontally scrolling.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isLastColumnSticky',
    'description': '<p>Makes the last column sticky (fixed) when horizontally scrolling.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isLoading',
    'description': '<p>Controls whether a loading state is shown.</p>\n',
    'type': 'boolean',
    'required': true
  },
  {
    'name': 'pagination',
    'description': '<p>Pagination object</p>\n',
    'type': 'Pagination<BasePagination<{ filter: Record<string, unknown>; sort: string; }>>',
    'required': true
  },
  {
    'name': 'rowAction',
    'description': '<p>Optional row-level action. When using other interactable elements inside cells,\nmake sure to user the <code>TableInteractiveElement</code> component.</p>\n',
    'type': 'null | ButtonAction<unknown> | LinkAction<unknown>',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'variant',
    'description': '<p>Defines the visual style of the table.</p>\n',
    'type': 'null',
    'required': false,
    'default': 'null'
  }
]" />

<ClassConfig :style-function="createTableStyle" />
