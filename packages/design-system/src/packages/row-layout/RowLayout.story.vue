<script setup lang="ts">
import RowLayout from './RowLayout.vue'
</script>

<template>
  <Story
    :layout="{
      type: 'grid',
      width: 450,
    }"
    title="Components/RowLayout"
  >
    <!-- Default Behavior -->
    <Variant title="Default (md gap, center align, start justify)">
      <RowLayout>
        <div
          class="rounded bg-brand-500 px-4 py-2 text-primary-on-brand"
        >
          Item 1
        </div>
        <div class="rounded bg-brand-600 px-4 py-2 text-primary-on-brand">
          Item 2
        </div>
        <div class="rounded bg-brand-700 px-4 py-2 text-primary-on-brand">
          Item 3
        </div>
      </RowLayout>
    </Variant>

    <!-- Gap Sizes -->
    <Variant title="No Gap">
      <RowLayout gap="none">
        <div class="bg-success-500 px-4 py-2 text-primary-on-brand">
          No
        </div>
        <div class="bg-success-600 px-4 py-2 text-primary-on-brand">
          Space
        </div>
        <div class="bg-success-700 px-4 py-2 text-primary-on-brand">
          Between
        </div>
      </RowLayout>
    </Variant>

    <Variant title="Extra Small Gap (xxs)">
      <RowLayout gap="xxs">
        <div class="rounded bg-brand-500 px-4 py-2 text-primary-on-brand">
          Tiny
        </div>
        <div class="rounded bg-brand-600 px-4 py-2 text-primary-on-brand">
          Gap
        </div>
      </RowLayout>
    </Variant>

    <Variant title="Large Gap (xl)">
      <RowLayout gap="xl">
        <div class="rounded bg-warning-500 px-4 py-2 text-primary-on-brand">
          Large
        </div>
        <div class="rounded bg-warning-600 px-4 py-2 text-primary-on-brand">
          Gap
        </div>
      </RowLayout>
    </Variant>

    <Variant title="Huge Gap (5xl)">
      <RowLayout gap="5xl">
        <div class="rounded bg-error-500 px-4 py-2 text-primary-on-brand">
          Huge
        </div>
        <div class="rounded bg-error-600 px-4 py-2 text-primary-on-brand">
          Gap
        </div>
      </RowLayout>
    </Variant>

    <!-- Justify Options -->
    <Variant title="Justify Start (default)">
      <div class="w-full border border-neutral-300 p-2">
        <RowLayout justify="start">
          <div class="rounded bg-brand-500 px-4 py-2 text-primary-on-brand">
            Left
          </div>
          <div class="rounded bg-brand-600 px-4 py-2 text-primary-on-brand">
            Aligned
          </div>
        </RowLayout>
      </div>
    </Variant>

    <Variant title="Justify Center">
      <div class="w-full border border-neutral-300 p-2">
        <RowLayout justify="center">
          <div class="rounded bg-success-500 px-4 py-2 text-primary-on-brand">
            Center
          </div>
          <div class="rounded bg-success-600 px-4 py-2 text-primary-on-brand">
            Aligned
          </div>
        </RowLayout>
      </div>
    </Variant>

    <Variant title="Justify End">
      <div class="w-full border border-neutral-300 p-2">
        <RowLayout justify="end">
          <div class="rounded bg-brand-500 px-4 py-2 text-primary-on-brand">
            Right
          </div>
          <div class="rounded bg-brand-600 px-4 py-2 text-primary-on-brand">
            Aligned
          </div>
        </RowLayout>
      </div>
    </Variant>

    <Variant title="Justify Between">
      <div class="w-full border border-neutral-300 p-2">
        <RowLayout justify="between">
          <div class="rounded bg-warning-500 px-4 py-2 text-primary-on-brand">
            Far Left
          </div>
          <div class="rounded bg-warning-600 px-4 py-2 text-primary-on-brand">
            Far Right
          </div>
        </RowLayout>
      </div>
    </Variant>

    <!-- Align Options (Vertical Alignment) -->
    <Variant title="Align Start">
      <div class="border border-neutral-300 p-2">
        <RowLayout align="start">
          <div
            class="
              flex h-20 items-center rounded bg-brand-500 px-4 py-2
              text-primary-on-brand
            "
          >
            Tall Box
          </div>
          <div class="rounded bg-brand-600 px-4 py-2 text-primary-on-brand">
            Short Box (top aligned)
          </div>
        </RowLayout>
      </div>
    </Variant>

    <Variant title="Align Center (default)">
      <div class="border border-neutral-300 p-2">
        <RowLayout align="center">
          <div
            class="
              flex h-20 items-center rounded bg-success-500 px-4 py-2
              text-primary-on-brand
            "
          >
            Tall Box
          </div>
          <div class="rounded bg-success-600 px-4 py-2 text-primary-on-brand">
            Short Box (center aligned)
          </div>
        </RowLayout>
      </div>
    </Variant>

    <Variant title="Align End">
      <div class="border border-neutral-300 p-2">
        <RowLayout align="end">
          <div
            class="
              flex h-20 items-center rounded bg-brand-500 px-4 py-2
              text-primary-on-brand
            "
          >
            Tall Box
          </div>
          <div class="rounded bg-brand-600 px-4 py-2 text-primary-on-brand">
            Short Box (bottom aligned)
          </div>
        </RowLayout>
      </div>
    </Variant>

    <!-- Combined Props -->
    <Variant title="Kitchen Sink (center + between + xl gap)">
      <div class="w-full border border-neutral-300 p-2">
        <RowLayout
          align="center"
          gap="xl"
          justify="between"
        >
          <div
            class="
              flex h-16 items-center rounded bg-brand-500 px-4 py-2
              text-primary-on-brand
            "
          >
            Left
          </div>
          <div
            class="
              flex h-12 items-center rounded bg-success-500 px-4 py-2
              text-primary-on-brand
            "
          >
            Center
          </div>
          <div
            class="
              flex h-16 items-center rounded bg-brand-500 px-4 py-2
              text-primary-on-brand
            "
          >
            Right
          </div>
        </RowLayout>
      </div>
    </Variant>

    <!-- Real World Example -->
    <Variant title="Real World: Card Actions">
      <div
        class="
          max-w-sm rounded-lg border border-neutral-200 bg-primary p-4 shadow-sm
        "
      >
        <h3 class="mb-2 text-lg font-semibold">
          Product Card
        </h3>
        <p class="mb-4 text-neutral-600">
          A beautiful product with amazing features
        </p>
        <RowLayout
          gap="sm"
          justify="end"
        >
          <button
            class="
              rounded border border-neutral-300 px-4 py-2
              hover:bg-neutral-50
            "
          >
            Cancel
          </button>
          <button
            class="
              rounded bg-brand-500 px-4 py-2 text-primary-on-brand
              hover:bg-brand-600
            "
          >
            Add to Cart
          </button>
        </RowLayout>
      </div>
    </Variant>

    <!-- Real World Example: Navigation -->
    <Variant title="Real World: Navigation Bar">
      <div class="max-w-2xl border border-neutral-200 bg-primary p-4 shadow-sm">
        <RowLayout
          gap="lg"
          justify="between"
        >
          <div class="text-xl font-bold text-brand-600">
            Logo
          </div>
          <RowLayout gap="md">
            <a
              class="
                text-neutral-700
                hover:text-brand-600
              "
              href="#"
            >Home</a>
            <a
              class="
                text-neutral-700
                hover:text-brand-600
              "
              href="#"
            >Products</a>
            <a
              class="
                text-neutral-700
                hover:text-brand-600
              "
              href="#"
            >About</a>
            <a
              class="
                text-neutral-700
                hover:text-brand-600
              "
              href="#"
            >Contact</a>
          </RowLayout>
        </RowLayout>
      </div>
    </Variant>
  </Story>
</template>
