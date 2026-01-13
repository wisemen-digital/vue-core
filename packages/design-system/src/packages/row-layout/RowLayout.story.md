# RowLayout Component

A flexible horizontal layout component that arranges child elements in a row with customizable spacing, alignment, and justification.

## Overview

The RowLayout component is a fundamental building block for creating horizontal layouts. It uses CSS flexbox under the hood and provides an intuitive API for controlling spacing between items, vertical alignment, and horizontal distribution.

## When to Use

- **Navigation bars:** Arrange logo, menu items, and actions horizontally
- **Button groups:** Place related actions side by side (e.g., Cancel and Submit buttons)
- **Card layouts:** Display content items in a horizontal grid
- **Form layouts:** Align form fields or controls in a row
- **Toolbars:** Create horizontal toolbars with consistent spacing

## Props

### gap

**Type:** `string` | **Default:** `"md"`

Controls the spacing between child elements. Uses your design system's spacing scale.

**Available values:**
- `"none"` - No spacing between items
- `"xxs"` - Extra extra small spacing
- `"xs"` - Extra small spacing
- `"sm"` - Small spacing
- `"md"` - Medium spacing (default)
- `"lg"` - Large spacing
- `"xl"` - Extra large spacing
- `"2xl"` through `"11xl"` - Progressively larger spacing

### justify

**Type:** `"start" | "center" | "end" | "between"` | **Default:** `"start"`

Controls how items are distributed horizontally along the main axis.

- `"start"` - Items align to the left (default)
- `"center"` - Items are centered horizontally
- `"end"` - Items align to the right
- `"between"` - Items are evenly distributed with space between them

### align

**Type:** `"start" | "center" | "end"` | **Default:** `"center"`

Controls how items are aligned vertically along the cross axis.

- `"start"` - Items align to the top
- `"center"` - Items are centered vertically (default)
- `"end"` - Items align to the bottom

### as

**Type:** `string` | **Default:** `"div"`

The HTML element to render as. Use `"nav"` for navigation, `"section"` for sections, etc.

## Usage Examples

### Basic Usage

```vue
<RowLayout>
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</RowLayout>
```

### Card Actions

```vue
<RowLayout gap="sm" justify="end">
  <button>Cancel</button>
  <button>Submit</button>
</RowLayout>
```

### Navigation Bar

```vue
<RowLayout as="nav" gap="lg" justify="between">
  <div>Logo</div>
  <RowLayout gap="md">
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">About</a>
  </RowLayout>
</RowLayout>
```

### Vertical Alignment with Different Heights

```vue
<RowLayout align="end">
  <div class="h-20">Tall item</div>
  <div>Short item</div>
</RowLayout>
```

## Design Guidelines

### Spacing

- **Form buttons:** Use `gap="sm"` for compact button groups
- **Navigation items:** Use `gap="md"` or `gap="lg"` for better readability
- **Card grids:** Use `gap="xl"` or larger for visual separation

### Alignment

- **Mixed content heights:** Use `align="center"` (default) for most cases
- **Baseline alignment:** Use `align="end"` when aligning text with different sizes
- **Top alignment:** Use `align="start"` for content-heavy layouts

### Distribution

- **Left-aligned content:** Use `justify="start"` (default)
- **Centered content:** Use `justify="center"` for hero sections or empty states
- **Right-aligned actions:** Use `justify="end"` for form buttons or card actions
- **Navigation bars:** Use `justify="between"` to separate logo from menu

## Accessibility

- Use semantic HTML elements with the `as` prop (e.g., `as="nav"` for navigation)
- Ensure sufficient spacing for touch targets (minimum 44x44px for interactive elements)
- Maintain logical tab order by placing items in DOM order

## Related Components

- **ColumnLayout:** For vertical layouts
- **Separator:** For adding visual dividers between items
