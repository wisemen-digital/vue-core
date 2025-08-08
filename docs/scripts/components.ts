type ComponentConfig = {
  sourceFolder: string;
  targetFolder: string;
  componentName: string;
  styleFunctionName?: string;
}

export const components: ComponentConfig[] = [
  // Address Autocomplete
  {
    sourceFolder: 'address-autocomplete/AddressAutocomplete.vue',
    targetFolder: 'address-autocomplete',
    componentName: 'AddressAutocomplete',
    styleFunctionName: 'createSelectStyle',
  },
  // Autocomplete
  {
    sourceFolder: 'autocomplete/Autocomplete.vue',
    targetFolder: 'autocomplete',
    componentName: 'Autocomplete',
    styleFunctionName: 'createSelectStyle',
  },
  // Avatar
  {
    sourceFolder: 'avatar/parts/AvatarRoot.vue',
    targetFolder: 'avatar',
    componentName: 'Avatar',
    styleFunctionName: 'createAvatarStyle',
  },
  // Badge
  {
    sourceFolder: 'badge/parts/BadgeRoot.vue',
    targetFolder: 'badge',
    componentName: 'Badge',
    styleFunctionName: 'createBadgeStyle',
  },
  // Button
  {
    sourceFolder: 'button/default-button/parts/ButtonRoot.vue',
    targetFolder: 'button',
    componentName: 'Button',
    styleFunctionName: 'createButtonStyle',
  },
  // Checkbox
  {
    sourceFolder: 'checkbox/parts/CheckboxRoot.vue',
    targetFolder: 'checkbox',
    componentName: 'Checkbox',
    styleFunctionName: 'createFormFieldStyle',
  },
  // Checkbox group
  {
    sourceFolder: 'checkbox-group/parts/CheckboxGroupRoot.vue',
    targetFolder: 'checkbox-group',
    componentName: 'CheckboxGroup',
    styleFunctionName: 'createFormFieldStyle',
  },
  // Date Field
  {
    sourceFolder: 'date-field/parts/DateFieldRoot.vue',
    targetFolder: 'date-field',
    componentName: 'DateField',
    styleFunctionName: 'createDateFieldStyle',
  },
  // Date picker
  {
    sourceFolder: 'date-picker/single/parts/DatePickerRoot.vue',
    targetFolder: 'date-picker',
    componentName: 'DatePicker',
    styleFunctionName: 'createDatePickerStyle',
  },
  // Date Range Field
  {
    sourceFolder: 'date-range-field/parts/DateRangeFieldRoot.vue',
    targetFolder: 'date-range-field',
    componentName: 'DateRangeField',
    styleFunctionName: 'createDateRangeFieldStyle',
  },
  // Date Range picker
  {
    sourceFolder: 'date-picker/range/parts/DateRangePickerRoot.vue',
    targetFolder: 'date-range-picker',
    componentName: 'DateRangePicker',
    styleFunctionName: 'createDateRangePickerStyle',
  },
  // Dialog
  {
    sourceFolder: 'dialog/parts/DialogRoot.vue',
    targetFolder: 'dialog',
    componentName: 'Dialog',
    styleFunctionName: 'createDialogStyle',
  },
  // Dropdown Menu
  {
    sourceFolder: 'dropdown-menu/parts/DropdownMenuRoot.vue',
    targetFolder: 'dropdown-menu',
    componentName: 'DropdownMenu',
    styleFunctionName: 'createDropdownMenuStyle',
  },
  // File upload
  {
    sourceFolder: 'file-upload/parts/FileUploadRoot.vue',
    targetFolder: 'file-upload',
    componentName: 'FileUpload',
  },
  // Form Field
  {
    sourceFolder: 'form-field/parts/FormFieldRoot.vue',
    targetFolder: 'form-field',
    componentName: 'FormField',
    styleFunctionName: 'createFormFieldStyle',
  },
  // Icon button
  {
    sourceFolder: 'button/icon-button/parts/IconButtonRoot.vue',
    targetFolder: 'icon-button',
    componentName: 'IconButton',
    styleFunctionName: 'createIconButtonStyle',
  },
  // Keyboard key
  {
    sourceFolder: 'keyboard-key/KeyboardKey.vue',
    targetFolder: 'keyboard-key',
    componentName: 'KeyboardKey',
    styleFunctionName: 'createKeyboardKeyStyle',
  },
  // Keyboard shortcut
  {
    sourceFolder: 'keyboard-shortcut/KeyboardShortcut.vue',
    targetFolder: 'keyboard-shortcut',
    componentName: 'KeyboardShortcut',
    styleFunctionName: 'createKeyboardShortcutStyle',
  },
  // Keyboard shortcut provider
  {
    sourceFolder: 'keyboard-shortcut-provider/KeyboardShortcutProvider.vue',
    targetFolder: 'keyboard-shortcut-provider',
    componentName: 'KeyboardShortcutProvider',
  },
  // Number Field
  {
    sourceFolder: 'number-field/parts/NumberFieldRoot.vue',
    targetFolder: 'number-field',
    componentName: 'NumberField',
    styleFunctionName: 'createNumberFieldStyle',
  },
  // Password Field
  {
    sourceFolder: 'password-field/PasswordField.vue',
    targetFolder: 'password-field',
    componentName: 'PasswordField',
    styleFunctionName: 'createTextFieldStyle',
  },
  // Phone Number Field
  {
    sourceFolder: 'phone-number-field/PhoneNumberField.vue',
    targetFolder: 'phone-number-field',
    componentName: 'PhoneNumberField',
    styleFunctionName: 'createTextFieldStyle',
  },
  // Popover
  {
    sourceFolder: 'popover/parts/PopoverRoot.vue',
    targetFolder: 'popover',
    componentName: 'Popover',
    styleFunctionName: 'createPopoverStyle',
  },
  // Radio group
  {
    sourceFolder: 'radio-group/parts/RadioGroupRoot.vue',
    targetFolder: 'radio-group',
    componentName: 'RadioGroup',
    styleFunctionName: 'createFormFieldStyle',
  },
  // Router link button
  {
    sourceFolder: 'button/router-link-button/parts/RouterLinkButtonRoot.vue',
    targetFolder: 'router-link-button',
    componentName: 'RouterLinkButton',
    styleFunctionName: 'createRouterLinkButtonStyle',
  },
  // Router link tabs
  {
    sourceFolder: 'tabs/shared/parts/TabsRoot.vue',
    targetFolder: 'router-link-tabs',
    componentName: 'RouterLinkTabs',
    styleFunctionName: 'createTabsStyle',
  },
  // Select
  {
    sourceFolder: 'select/parts/SelectRoot.vue',
    targetFolder: 'select',
    componentName: 'Select',
    styleFunctionName: 'createSelectStyle',
  },
  // Switch
  {
    sourceFolder: 'switch/parts/SwitchRoot.vue',
    targetFolder: 'switch',
    componentName: 'Switch',
    styleFunctionName: 'createFormFieldStyle',
  },
  // Table
  {
    sourceFolder: 'table/parts/TableRoot.vue',
    targetFolder: 'table',
    componentName: 'Table',
    styleFunctionName: 'createTableStyle',
  },
  // Tabs
  {
    sourceFolder: 'tabs/shared/parts/TabsRoot.vue',
    targetFolder: 'tabs',
    componentName: 'Tabs',
    styleFunctionName: 'createTabsStyle',
  },
  // Text Field
  {
    sourceFolder: 'text-field/parts/TextFieldRoot.vue',
    targetFolder: 'text-field',
    componentName: 'TextField',
    styleFunctionName: 'createTextFieldStyle',
  },
  // Textarea
  {
    sourceFolder: 'textarea/parts/TextareaRoot.vue',
    targetFolder: 'textarea',
    componentName: 'Textarea',
    styleFunctionName: 'createFormFieldStyle',
  },
  // Time Field
  {
    sourceFolder: 'time-field/parts/TimeFieldRoot.vue',
    targetFolder: 'time-field',
    componentName: 'TimeField',
    styleFunctionName: 'createFormFieldStyle',
  },
  // Toast
  {
    sourceFolder: 'toast/parts/ToastRoot.vue',
    targetFolder: 'toast',
    componentName: 'Toast',
    styleFunctionName: 'createToastStyle',
  },
  // Tooltip
  {
    sourceFolder: 'tooltip/parts/TooltipRoot.vue',
    targetFolder: 'tooltip',
    componentName: 'Tooltip',
    styleFunctionName: 'createTooltipStyle',
  },
]