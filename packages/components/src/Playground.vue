<script setup lang="ts">
import { ref } from 'vue'

import AppButton from '@/components/button/AppButton.vue'
import AppTextField from '@/components/text-field/AppTextField.vue'

const themes = [
  'default',
  'leander',
  'retro',
  'blushy',
  'modern',
]

const theme = ref<string>('default')

const isLoading = ref<boolean>(false)
</script>

<template>
  <div class="p-24">
    <div class="mb-12 grid grid-cols-6 gap-8">
      <div>
        <AppButton
          :is-disabled="true"
          :is-loading="false"
          icon-left="checkmarkCircle"
        >
          Confirm order
        </AppButton>
      </div>

      <div>
        <AppButton
          :is-disabled="false"
          :is-loading="isLoading"
          icon-left="checkmarkCircle"
        >
          Confirm order
        </AppButton>
      </div>

      <div>
        <AppButton
          :is-disabled="false"
          :is-loading="isLoading"
          icon-left="checkmarkCircle"
          size="sm"
        >
          Confirm order
        </AppButton>
      </div>

      <div>
        <AppButton
          :is-disabled="false"
          variant="muted"
          icon-left="checkmarkCircle"
          @click="isLoading = !isLoading"
        >
          Confirm order
        </AppButton>
      </div>

      <div>
        <AppButton
          :is-disabled="false"
          icon-left="checkmarkCircle"
          variant="ghost"
        >
          Confirm order
        </AppButton>
      </div>

      <div>
        <AppButton
          :is-disabled="false"
          icon-left="checkmarkCircle"
          variant="outline"
        >
          Confirm order
        </AppButton>
      </div>

      <div>
        <AppButton
          :is-disabled="false"
          icon-left="checkmarkCircle"
          size="sm"
          variant="destructive"
        >
          Confirm order
        </AppButton>
      </div>
    </div>

    <div class="mb-12 flex flex-col gap-y-4 rounded-md border border-solid border-gray-200 bg-gray-100 p-2">
      <template
        v-for="t of themes"
        :key="t"
      >
        <label>
          <input
            v-model="theme"
            :value="t"
            type="radio"
          >

          {{ t }}
        </label>
      </template>
    </div>

    <div class="grid grid-cols-3 items-end gap-12">
      <AppTextField :class="theme" />

      <AppTextField
        :class="theme"
        icon-left="search"
        placeholder="Search..."
      />

      <AppTextField
        :class="theme"
        :is-required="true"
        icon-right="calendar"
        label="Make a reservation"
      />

      <AppTextField
        :class="theme"
        :is-disabled="true"
      />

      <AppTextField
        :class="theme"
        :is-loading="true"
      />

      <AppTextField
        :class="theme"
        hint="Make sure to include your email address."
      />
    </div>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Inter Variable', sans-serif;
}

.leander {
  --text-field-border-left-default: transparent;
  --text-field-border-left-focus: transparent;
  --text-field-border-left-hover: transparent;
  --text-field-border-left-disabled: transparent;
  --text-field-border-left-error: #ff0202;

  --text-field-border-right-default: transparent;
  --text-field-border-right-focus: transparent;
  --text-field-border-right-hover: transparent;
  --text-field-border-right-disabled: transparent;
  --text-field-border-right-error: #ff0202;

  --text-field-border-bottom-default: transparent;
  --text-field-border-bottom-focus: transparent;
  --text-field-border-bottom-hover: transparent;
  --text-field-border-bottom-disabled: transparent;
  --text-field-border-bottom-error: #ff0202;

  --text-field-border-top-default: transparent;
  --text-field-border-top-focus: transparent;
  --text-field-border-top-hover: transparent;
  --text-field-border-top-disabled: transparent;
  --text-field-border-top-error: #ff0202;

  --text-field-focus-ring-default: transparent;
  --text-field-focus-ring-focus: transparent;
  --text-field-focus-ring-hover: transparent;
  --text-field-focus-ring-disabled: transparent;
  --text-field-focus-ring-error: #ff020270;

  --text-field-bg-default: #ffffff;
  --text-field-bg-focus: #F2F4F7;
  --text-field-bg-hover: #F2F4F7;
  --text-field-bg-disabled: #fbfbfb;
  --text-field-bg-error: #ffffff;

  --text-field-color-default: #303030;
  --text-field-color-focus: #303030;
  --text-field-color-hover: #303030;
  --text-field-color-disabled: #e9e9e9;
  --text-field-color-error: #303030;

  --text-field-placeholder-default: #c6c6c6;
  --text-field-placeholder-focus: #c6c6c6;
  --text-field-placeholder-hover: #c6c6c6;
  --text-field-placeholder-disabled: #dedede;
  --text-field-placeholder-error: #c6c6c6;

  --text-field-shadow-default: 0px 0px 0px 0px #000000;
  --text-field-shadow-focus: 0px 0px 0px 0px #000000;
  --text-field-shadow-hover: 0px 0px 0px 0px #000000;
  --text-field-shadow-disabled: 0px 0px 0px 0px #000000;
  --text-field-shadow-error: 0px 0px 0px 0px #000000;

  --text-field-border-radius-top-left-default: 6px;
  --text-field-border-radius-top-right-default: 6px;
  --text-field-border-radius-bottom-left-default: 6px;
  --text-field-border-radius-bottom-right-default: 6px;

  --text-field-padding-left-default: 6px;
  --text-field-padding-right-default: 6px;

  --text-field-height-default: 32px;

  --text-field-font-size-default: 14px;
  --text-field-font-weight-default: 400;

  // Icon
  --text-field-icon-size-default: 18px;

  --text-field-icon-color-default: #909090;
  --text-field-icon-color-focus: #909090;
  --text-field-icon-color-hover: #909090;
  --text-field-icon-color-disabled: #ccc;
  --text-field-icon-color-error: #ff0202;

  --text-field-icon-left-padding-left-default: 6px;
  --text-field-icon-right-padding-right-default: 6px;

  // Label
  --text-field-label-color-default: #3d4658;
  --text-field-label-color-focus: #3d4658;
  --text-field-label-color-hover: #3d4658;
  --text-field-label-color-disabled: #3d4658;
  --text-field-label-color-error: #ff0202;

  --text-field-label-font-size-default: 14px;
  --text-field-label-font-weight-default: 400;
  --text-field-label-padding-bottom-default:4px;

  // Loader
  --text-field-loader-size-default: 14px;
  --text-field-loader-color-default: #3d4658;
  --text-field-loader-color-disabled: #b6b6b6;
  --text-field-loader-color-error: #ff0202;
  --text-field-loader-color-focus: #007bff;
  --text-field-loader-color-hover: #3d4658;
}

.retro {
  --text-field-border-left-default: #4CAF50; /* Bright green for a game-like theme */
  --text-field-border-left-focus: #FFC107;  /* Yellow for focused state */
  --text-field-border-left-hover: #FFC107;  /* Match hover with focus */
  --text-field-border-left-disabled: #9E9E9E; /* Darker gray for disabled */
  --text-field-border-left-error: #F44336; /* Bright red for errors */

  --text-field-border-right-default: #4CAF50;
  --text-field-border-right-focus: #FFC107;
  --text-field-border-right-hover: #FFC107;
  --text-field-border-right-disabled: #9E9E9E;
  --text-field-border-right-error: #F44336;

  --text-field-border-bottom-default: #4CAF50;
  --text-field-border-bottom-focus: #FFC107;
  --text-field-border-bottom-hover: #FFC107;
  --text-field-border-bottom-disabled: #9E9E9E;
  --text-field-border-bottom-error: #F44336;

  --text-field-border-top-default: #4CAF50;
  --text-field-border-top-focus: #FFC107;
  --text-field-border-top-hover: #FFC107;
  --text-field-border-top-disabled: #9E9E9E;
  --text-field-border-top-error: #F44336;

  --text-field-focus-ring-default: transparent; /* No glow for default */
  --text-field-focus-ring-focus: #FFC10770; /* Yellow glow for focus */
  --text-field-focus-ring-hover: #FFC10770;
  --text-field-focus-ring-disabled: transparent;
  --text-field-focus-ring-error: #F4433670; /* Red glow for error */

  --text-field-bg-default: #1C1C1C; /* Dark background for contrast */
  --text-field-bg-focus: #333333; /* Slightly lighter for focus */
  --text-field-bg-hover: #333333;
  --text-field-bg-disabled: #2F2F2F; /* Dull background for disabled */
  --text-field-bg-error: #1C1C1C;

  --text-field-color-default: #E0E0E0; /* Light text color for visibility */
  --text-field-color-focus: #FFFFFF;  /* White text on focus for better contrast */
  --text-field-color-hover: #FFFFFF;
  --text-field-color-disabled: #757575; /* Gray text for disabled */
  --text-field-color-error: #FFFFFF;  /* Keep white text in error state */

  --text-field-placeholder-default: #9E9E9E; /* Dull gray for placeholders */
  --text-field-placeholder-focus: #BDBDBD;
  --text-field-placeholder-hover: #BDBDBD;
  --text-field-placeholder-disabled: #9E9E9E;
  --text-field-placeholder-error: #F44336; /* Red for error placeholder */

  --text-field-shadow-default: 4px 4px 0px #2C2C2C; /* Bold shadow for blocky look */
  --text-field-shadow-focus: 4px 4px 0px #FFC107; /* Yellow shadow for focus */
  --text-field-shadow-hover: 4px 4px 0px #FFC107;
  --text-field-shadow-disabled: none; /* No shadow for disabled */
  --text-field-shadow-error: 4px 4px 0px #F44336; /* Bold red shadow for error */

  --text-field-border-radius-top-left-default: 2px; /* Minimal rounding for blocky look */
  --text-field-border-radius-top-right-default: 2px;
  --text-field-border-radius-bottom-left-default: 2px;
  --text-field-border-radius-bottom-right-default: 2px;

  --text-field-padding-left-default: 10px; /* Slightly smaller padding */
  --text-field-padding-right-default: 10px;

  --text-field-height-default: 38px; /* Medium height to suit blocky input */

  --text-field-font-size-default: 14px;
  --text-field-font-weight-default: 600; /* Bold font for gaming vibe */

  /* Icon */
  --text-field-icon-size-default: 20px; /* Slightly bigger icons */
  --text-field-icon-color-default: #FFC107; /* Yellow icons */
  --text-field-icon-color-focus: #FFFFFF; /* White on focus */
  --text-field-icon-color-hover: #FFFFFF;
  --text-field-icon-color-disabled: #9E9E9E;
  --text-field-icon-color-error: #F44336; /* Red icons for error */

  --text-field-icon-left-padding-left-default: 8px;
  --text-field-icon-right-padding-right-default: 8px;

  /* Label */
  --text-field-label-color-default: #E0E0E0; /* Light gray for label text */
  --text-field-label-color-focus: #FFFFFF; /* White label on focus */
  --text-field-label-color-hover: #FFFFFF;
  --text-field-label-color-disabled: #9E9E9E;
  --text-field-label-color-error: #F44336; /* Red for error labels */

  --text-field-label-font-size-default: 12px;
  --text-field-label-font-weight-default: 600; /* Bold label for emphasis */
  --text-field-label-padding-bottom-default: 2px; /* Tighten up spacing */

  /* Loader */
  --text-field-loader-size-default: 16px;
  --text-field-loader-color-default: #FFC107; /* Yellow loader for game theme */
  --text-field-loader-color-disabled: #757575;
  --text-field-loader-color-error: #F44336; /* Red loader for error */
  --text-field-loader-color-focus: #FFFFFF; /* White loader on focus */
  --text-field-loader-color-hover: #FFFFFF;
}

.blushy {
  --text-field-border-left-default: #FFB6C1; /* Light pink for a soft look */
  --text-field-border-left-focus: #FF69B4;  /* Hot pink for focused state */
  --text-field-border-left-hover: #FF69B4;  /* Hot pink on hover */
  --text-field-border-left-disabled: #F8D7DA; /* Pale pink for disabled state */
  --text-field-border-left-error: #FF6F91; /* Blush red-pink for errors */

  --text-field-border-right-default: #FFB6C1;
  --text-field-border-right-focus: #FF69B4;
  --text-field-border-right-hover: #FF69B4;
  --text-field-border-right-disabled: #F8D7DA;
  --text-field-border-right-error: #FF6F91;

  --text-field-border-bottom-default: #FFB6C1;
  --text-field-border-bottom-focus: #FF69B4;
  --text-field-border-bottom-hover: #FF69B4;
  --text-field-border-bottom-disabled: #F8D7DA;
  --text-field-border-bottom-error: #FF6F91;

  --text-field-border-top-default: #FFB6C1;
  --text-field-border-top-focus: #FF69B4;
  --text-field-border-top-hover: #FF69B4;
  --text-field-border-top-disabled: #F8D7DA;
  --text-field-border-top-error: #FF6F91;

  --text-field-focus-ring-default: transparent; /* No focus ring by default */
  --text-field-focus-ring-focus: #FF69B470; /* Subtle pink glow on focus */
  --text-field-focus-ring-hover: #FF69B470;
  --text-field-focus-ring-disabled: transparent;
  --text-field-focus-ring-error: #FF6F9170; /* Soft red-pink glow for error */

  --text-field-bg-default: #FFF0F5; /* Light pink background */
  --text-field-bg-focus: #FFF5F7; /* Slightly lighter for focus */
  --text-field-bg-hover: #FFF5F7;
  --text-field-bg-disabled: #FDEEF0; /* Even lighter pink for disabled */
  --text-field-bg-error: #FFF0F5;

  --text-field-color-default: #663399; /* Soft purple text */
  --text-field-color-focus: #4B0082;  /* Darker purple text on focus */
  --text-field-color-hover: #4B0082;
  --text-field-color-disabled: #D8BFD8; /* Light purple for disabled text */
  --text-field-color-error: #FF6F91;  /* Pink-red for error text */

  --text-field-placeholder-default: #DDA0DD; /* Light purple for placeholder */
  --text-field-placeholder-focus: #DDA0DD;
  --text-field-placeholder-hover: #DDA0DD;
  --text-field-placeholder-disabled: #FADADD; /* Very light pink for disabled */
  --text-field-placeholder-error: #FF6F91; /* Blush pink for error placeholder */

  --text-field-shadow-default: 0px 2px 8px #FFC0CB55; /* Soft shadow for blushy feel */
  --text-field-shadow-focus: 0px 2px 10px #FF69B455; /* Hot pink shadow on focus */
  --text-field-shadow-hover: 0px 2px 10px #FF69B455;
  --text-field-shadow-disabled: 0px 0px 0px #FFC0CB00; /* No shadow for disabled */
  --text-field-shadow-error: 0px 2px 10px #FF6F9155; /* Soft red-pink shadow for error */

  --text-field-border-radius-top-left-default: 16px; /* Very rounded for softness */
  --text-field-border-radius-top-right-default: 16px;
  --text-field-border-radius-bottom-left-default: 16px;
  --text-field-border-radius-bottom-right-default: 16px;

  --text-field-padding-left-default: 14px; /* Cozy padding */
  --text-field-padding-right-default: 14px;

  --text-field-height-default: 42px; /* Slightly taller for a feminine feel */

  --text-field-font-size-default: 15px; /* Slightly bigger font for a playful look */
  --text-field-font-weight-default: 400;

  /* Icon */
  --text-field-icon-size-default: 18px; /* Icon size remains cute but clear */
  --text-field-icon-color-default: #FF69B4; /* Hot pink icons */
  --text-field-icon-color-focus: #FF69B4; /* Keep hot pink for focus */
  --text-field-icon-color-hover: #FF69B4;
  --text-field-icon-color-disabled: #FFC0CB; /* Light pink for disabled */
  --text-field-icon-color-error: #FF6F91; /* Blush pink for error */

  --text-field-icon-left-padding-left-default: 10px;
  --text-field-icon-right-padding-right-default: 10px;

  /* Label */
  --text-field-label-color-default: #FF69B4; /* Hot pink label */
  --text-field-label-color-focus: #FF69B4;
  --text-field-label-color-hover: #FF69B4;
  --text-field-label-color-disabled: #FFC0CB; /* Light pink for disabled */
  --text-field-label-color-error: #FF6F91; /* Pink for error labels */

  --text-field-label-font-size-default: 14px;
  --text-field-label-font-weight-default: 500; /* Slightly bold for playful emphasis */
  --text-field-label-padding-bottom-default: 6px; /* Extra padding for a gentle feel */

  /* Loader */
  --text-field-loader-size-default: 14px;
  --text-field-loader-color-default: #FF69B4; /* Hot pink loader */
  --text-field-loader-color-disabled: #FFC0CB; /* Light pink loader when disabled */
  --text-field-loader-color-error: #FF6F91; /* Blush pink loader for errors */
  --text-field-loader-color-focus: #FF69B4; /* Keep hot pink for focus */
  --text-field-loader-color-hover: #FF69B4;

  /* Hint */
  --text-field-hint-color-default: #FF6F91;
  --text-field-hint-color-disabled: #FF6F91;
  --text-field-hint-color-error: #FF6F91;
  --text-field-hint-color-focus: #FF6F91;
  --text-field-hint-color-hover: #FF6F91;
}

.modern {
  --text-field-border-left-default: #e0e0e0;
  --text-field-border-left-focus: #007bff;
  --text-field-border-left-hover: #0056b3;
  --text-field-border-left-disabled: #d0d5dd;
  --text-field-border-left-error: #ff0202;

  --text-field-border-right-default: #e0e0e0;
  --text-field-border-right-focus: #007bff;
  --text-field-border-right-hover: #0056b3;
  --text-field-border-right-disabled: #d0d5dd;
  --text-field-border-right-error: #ff0202;

  --text-field-border-bottom-default: #e0e0e0;
  --text-field-border-bottom-focus: #007bff;
  --text-field-border-bottom-hover: #0056b3;
  --text-field-border-bottom-disabled: #d0d5dd;
  --text-field-border-bottom-error: #ff0202;

  --text-field-border-top-default: #e0e0e0;
  --text-field-border-top-focus: #007bff;
  --text-field-border-top-hover: #0056b3;
  --text-field-border-top-disabled: #d0d5dd;
  --text-field-border-top-error: #ff0202;

  --text-field-focus-ring-default: transparent;
  --text-field-focus-ring-focus: #007bff70; /* Soft blue focus ring */
  --text-field-focus-ring-hover: transparent;
  --text-field-focus-ring-disabled: transparent;
  --text-field-focus-ring-error: #ff020270;

  --text-field-bg-default: #ffffff;
  --text-field-bg-focus: #f7f7f7;
  --text-field-bg-hover: #f0f0f0;
  --text-field-bg-disabled: #fbfbfb;
  --text-field-bg-error: #ffffff;

  --text-field-color-default: #303030;
  --text-field-color-focus: #303030;
  --text-field-color-hover: #303030;
  --text-field-color-disabled: #e9e9e9;
  --text-field-color-error: #ff0202;

  --text-field-placeholder-default: #c6c6c6;
  --text-field-placeholder-focus: #c6c6c6;
  --text-field-placeholder-hover: #c6c6c6;
  --text-field-placeholder-disabled: #dedede;
  --text-field-placeholder-error: #ff0202;

  --text-field-shadow-default: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Soft shadow */
  --text-field-shadow-focus: 0px 4px 12px rgba(0, 123, 255, 0.2); /* Blue shadow on focus */
  --text-field-shadow-hover: 0px 6px 16px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
  --text-field-shadow-disabled: 0px 0px 0px rgba(0, 0, 0, 0.1);
  --text-field-shadow-error: 0px 4px 12px rgba(255, 2, 2, 0.2); /* Error shadow */

  --text-field-border-radius-top-left-default: 8px; /* Smooth rounded corners */
  --text-field-border-radius-top-right-default: 8px;
  --text-field-border-radius-bottom-left-default: 8px;
  --text-field-border-radius-bottom-right-default: 8px;

  --text-field-padding-left-default: 16px; /* Larger padding for modern look */
  --text-field-padding-right-default: 16px;

  --text-field-height-default: 48px; /* Slightly taller for modern proportions */

  --text-field-font-size-default: 16px; /* Bigger font for modern feel */
  --text-field-font-weight-default: 500;

  // Icon
  --text-field-icon-size-default: 18px;
  --text-field-icon-color-default: #909090;
  --text-field-icon-color-focus: #007bff;
  --text-field-icon-color-hover: #909090;
  --text-field-icon-color-disabled: #ccc;
  --text-field-icon-color-error: #ff0202;

  --text-field-icon-left-padding-left-default: 12px;
  --text-field-icon-right-padding-right-default: 12px;

  // Label
  --text-field-label-color-default: #3d4658;
  --text-field-label-color-focus: #3d4658;
  --text-field-label-color-hover: #3d4658;
  --text-field-label-color-disabled: #3d4658;
  --text-field-label-color-error: #ff0202;

  --text-field-label-font-size-default: 16px;
  --text-field-label-font-weight-default: 500;
  --text-field-label-padding-bottom-default: 4px;

  // Loader
  --text-field-loader-size-default: 14px;
  --text-field-loader-color-default: #3d4658;
  --text-field-loader-color-disabled: #b6b6b6;
  --text-field-loader-color-error: #ff0202;
  --text-field-loader-color-focus: #007bff;
  --text-field-loader-color-hover: #3d4658;
}
</style>
