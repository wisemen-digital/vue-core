# Theming

The `@wisemen/vue-core` package provides a default theme configuration, which serves as a starting point for customizing the visual appearance of your application.

## Customizing the Theme

You can customize the theme by overriding the default theme configuration in your own CSS file. Below is the default theme configuration:

### Default Light Theme

```css
.default.light {
  --brand-25: #FCFAFF;
  --brand-50: #F9F5FF;
  --brand-100: #F4EBFF;
  --brand-200: #E9D7FE;
  --brand-300: #D6BBFB;
  --brand-400: #B692F6;
  --brand-500: #9E77ED;
  --brand-600: #7F56D9;
  --brand-700: #6941C6;
  --brand-800: #53389E;
  --brand-900: #42307D;
  --brand-950: #2C1C5F;

  --error-25: #FFFBFA;
  --error-50: #FEF3F2;
  --error-100: #FEE4E2;
  --error-200: #FECDCA;
  --error-300: #FDA29B;
  --error-400: #F97066;
  --error-500: #F04438;
  --error-600: #D92D20;
  --error-700: #B42318;
  --error-800: #912018;
  --error-900: #7A271A;
  --error-950: #55160C;

  --warning-25: #FFFCF5;
  --warning-50: #FFFAEB;
  --warning-100: #FEF0C7;
  --warning-200: #FEDF89;
  --warning-300: #FEC84B;
  --warning-400: #FDB022;
  --warning-500: #F79009;
  --warning-600: #DC6803;
  --warning-700: #B54708;
  --warning-800: #93370D;
  --warning-900: #7A2E0E;
  --warning-950: #4E1D09;

  --success-25: #F6FEF9;
  --success-50: #ECFDF3;
  --success-100: #DCFAE6;
  --success-200: #ABEFC6;
  --success-300: #75E0A7;
  --success-400: #47CD89;
  --success-500: #17B26A;
  --success-600: #079455;
  --success-700: #067647;
  --success-800: #085D3A;
  --success-900: #074D31;
  --success-950: #053321;

  --gray-25: #FDFDFD;
  --gray-50: #FAFAFA;
  --gray-100: #F5F5F5;
  --gray-200: #E9EAEB;
  --gray-300: #D5D7DA;
  --gray-400: #A4A7AE;
  --gray-500: #717680;
  --gray-600: #535862;
  --gray-700: #414651;
  --gray-800: #252B37;
  --gray-900: #181D27;
  --gray-950: #0A0D12;
  
  --black: #000000;
  --white: #ffffff;
}
```

### Default Dark Theme

```css
.default.dark {
   --brand-25: #FCFAFF;
  --brand-50: #F9F5FF;
  --brand-100: #F4EBFF;
  --brand-200: #E9D7FE;
  --brand-300: #D6BBFB;
  --brand-400: #B692F6;
  --brand-500: #9E77ED;
  --brand-600: #7F56D9;
  --brand-700: #6941C6;
  --brand-800: #53389E;
  --brand-900: #42307D;
  --brand-950: #2C1C5F;

  --error-25: #FFFBFA;
  --error-50: #FEF3F2;
  --error-100: #FEE4E2;
  --error-200: #FECDCA;
  --error-300: #FDA29B;
  --error-400: #F97066;
  --error-500: #F04438;
  --error-600: #D92D20;
  --error-700: #B42318;
  --error-800: #912018;
  --error-900: #7A271A;
  --error-950: #55160C;

  --warning-25: #FFFCF5;
  --warning-50: #FFFAEB;
  --warning-100: #FEF0C7;
  --warning-200: #FEDF89;
  --warning-300: #FEC84B;
  --warning-400: #FDB022;
  --warning-500: #F79009;
  --warning-600: #DC6803;
  --warning-700: #B54708;
  --warning-800: #93370D;
  --warning-900: #7A2E0E;
  --warning-950: #4E1D09;

  --success-25: #F6FEF9;
  --success-50: #ECFDF3;
  --success-100: #DCFAE6;
  --success-200: #ABEFC6;
  --success-300: #75E0A7;
  --success-400: #47CD89;
  --success-500: #17B26A;
  --success-600: #079455;
  --success-700: #067647;
  --success-800: #085D3A;
  --success-900: #074D31;
  --success-950: #053321;

  --gray-25: #FAFAFA;
  --gray-50: #F7F7F7;
  --gray-100: #F0F1F1;
  --gray-200: #ECECED;
  --gray-300: #CECFD2;
  --gray-400: #94969C;
  --gray-500: #85888E;
  --gray-600: #61646C;
  --gray-700: #373A41;
  --gray-800: #22262F;
  --gray-900: #13161B;
  --gray-950: #0C0E12;

  --black: #000000;
  --white: #ffffff;
}
```

## Applying Theme Configuration

To apply the theme configuration throughout your application, wrap your application in the `VcThemeProvider` component:

```vue
<script setup lang="ts">
import { VcConfigProvider, VcThemeProvider } from '@wisemen/vue-core'
</script>

<template>
  <VcConfigProvider>
    <VcThemeProvider>
      <!-- Your application content -->
    </VcThemeProvider>
  </VcConfigProvider>
</template>
```

## Overriding Theme in Specific Sections

You can use `VcThemeProvider` anywhere in your application to override the theme for a specific section or component:

```vue
<VcThemeProvider theme="dark">
  <!-- This section will use the dark theme -->
</VcThemeProvider>
```

## Creating a Custom Theme

To define your own theme, use the `.theme-name.appearance` selector pattern in your CSS. For example, to create a custom light theme, use:

```css
.custom.light {
  --brand-25: ...;
}
```

To apply the custom theme, use the `theme` prop in the `VcThemeProvider` component:

```vue
<VcThemeProvider theme="custom">
  <!-- Your application content -->
</VcThemeProvider>
```