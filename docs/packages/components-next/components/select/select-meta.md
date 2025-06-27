<!-- This file was automatic generated. Do not edit it manually -->

<script setup>
import { createSelectStyle } from "@wisemen/vue-core-components";
</script>

<PropsTable :data="[
  {
    'name': 'classConfig',
    'description': '<p>The class configuration for the component. This allows customizating the default styles\nby overriding them with custom values.</p>\n',
    'type': 'ResolvedClassConfig<\'select\'> | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'clearSearchTermOnSelect',
    'description': '<p>Whether to clear the search term when an item is selected.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'displayFn',
    'description': '<p>A function that determines how selected options are displayed in the input field.\nIt receives the selected option as an argument and should return a string representation.</p>\n',
    'type': 'SelectDisplayFn<SelectValue>',
    'required': true
  },
  {
    'name': 'errorMessage',
    'description': '<p>The error associated with the input.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'filter',
    'description': '<p>Configuration for filtering the select options.\nIf <code>null</code>, filtering is disabled.</p>\n',
    'type': '{ isEnabled: boolean; isInline?: boolean; fn?: SelectFilterFn<SelectValue>; } | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'hint',
    'description': '<p>The hint text of the input.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'iconLeft',
    'description': '<p>Icon displayed on the left side of the input field.\nIf <code>null</code>, no icon is displayed.</p>\n',
    'type': 'keyof Icons | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'iconRight',
    'description': '<p>Icon displayed on the right side of the input field.</p>\n',
    'type': 'keyof Icons | null',
    'required': false,
    'default': '\'selectIconRight\''
  },
  {
    'name': 'id',
    'description': '<p>The id of the element. If set to <code>null</code>, no ID will be applied.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'isDisabled',
    'description': '<p>Determines whether the element is disabled. When <code>true</code>, the element becomes non-interactive.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isDropdownHidden',
    'description': '<p>Controls the visibility of the dropdown.\nWhen set to <code>true</code>, the dropdown remains hidden.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isLoading',
    'description': '<p>Whether the select input should display a loading state.\nThis is useful when data is being fetched asynchronously.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isOpen',
    'description': '',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'isPopoverArrowVisible',
    'description': '<p>Controls the visibility of the popper arrow.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isRequired',
    'description': '<p>Whether the input is required.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isSearchTermControlled',
    'description': '<p>Determines whether the search term is controlled externally.\nIf <code>true</code>, the search term will only be updated when explicitly controlled via props.\nIf <code>false</code>, the search term is managed internally.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isTouched',
    'description': '<p>Whether the input is touched. Used to determine if an error should be shown.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'label',
    'description': '<p>The label of the input.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'modelValue',
    'description': '',
    'type': 'SelectValue',
    'required': true
  },
  {
    'name': 'placeholder',
    'description': '<p>Placeholder text for the select input when no value is selected.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'popoverAlign',
    'description': '<p>Defines how the popper content is aligned relative to the trigger element.</p>\n',
    'type': '\'center\' | \'end\' | \'start\'',
    'required': false,
    'default': '\'center\''
  },
  {
    'name': 'popoverAlignOffset',
    'description': '<p>An offset in pixels from the start or end alignment options.</p>\n',
    'type': 'number',
    'required': false,
    'default': '0'
  },
  {
    'name': 'popoverAnchorReferenceElement',
    'description': '<p>The HTML element that serves as the anchor point for the popover.\nIf set to <code>null</code>, the popover will be anchored to the trigger element.</p>\n',
    'type': 'HTMLElement | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'popoverCollisionPadding',
    'description': '<p>Specifies the padding (in pixels) used when handling collision detection.\nA larger value increases the spacing between the popper and the container edges.</p>\n',
    'type': 'number',
    'required': false,
    'default': '0'
  },
  {
    'name': 'popoverContainerElement',
    'description': '<p>The HTML element in which the popper content should be rendered.\nBy default, the popper content is rendered inside the viewport.</p>\n',
    'type': 'HTMLElement | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'popoverSide',
    'description': '<p>Defines which side the content should appear on.</p>\n',
    'type': '\'bottom\' | \'left\' | \'right\' | \'top\'',
    'required': false,
    'default': '\'bottom\''
  },
  {
    'name': 'popoverSideOffset',
    'description': '<p>The distance in pixels between the popper content and the trigger element.</p>\n',
    'type': 'number',
    'required': false,
    'default': '6'
  },
  {
    'name': 'popoverWidth',
    'description': '<p>Determines the width of the popper content.</p>\n<ul>\n<li><code>anchor-width</code>: Matches the width of the trigger element.</li>\n<li><code>available-width</code>: Expands to fit the available space.</li>\n<li><code>null</code>: Uses the natural width of the content.</li>\n</ul>\n',
    'type': 'null | \'anchor-width\' | \'available-width\'',
    'required': false,
    'default': '\'anchor-width\''
  },
  {
    'name': 'remainOpenOnSelect',
    'description': '<p>Determines whether the dropdown should remain open when the selected value changes.</p>\n<ul>\n<li>If <code>true</code>, the dropdown remains open after selecting an option.</li>\n<li>If <code>false</code>, the dropdown closes when an option is selected.</li>\n<li>If <code>null</code>, defaults to <code>true</code> if the select allows multiple selections, otherwise <code>false</code>.</li>\n</ul>\n',
    'type': 'boolean | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'searchInputPlaceholder',
    'description': '<p>Placeholder text for the search input.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'searchTerm',
    'description': '',
    'type': 'string',
    'required': false
  },
  {
    'name': 'testId',
    'description': '<p>A unique identifier used for testing purposes. If set to <code>null</code>, no test ID will be applied.</p>\n',
    'type': 'string | null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'variant',
    'description': '<p>Defines the visual style of the select component.</p>\n',
    'type': 'null',
    'required': false,
    'default': 'null'
  },
  {
    'name': 'virtualList',
    'description': '<p>Configuration for enabling a virtualized list when displaying large sets of options.</p>\n',
    'type': '{ isEnabled: boolean; items: AcceptableValue[]; optionHeight?: number; } | null',
    'required': false,
    'default': 'null'
  }
]" />


<ClassConfig :style-function="createSelectStyle" />

