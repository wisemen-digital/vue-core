# Planning Component

A flexible and interactive planning/calendar component that displays items in a weekly grid format with time slots. The component adapts its behavior based on the event handlers you provide, showing appropriate visual feedback for different interaction capabilities.

## Features

- **Flexible Interaction Model**: Automatically adapts behavior based on provided event handlers
- **Smart Visual Feedback**: Items show appropriate cursors and hover effects based on their capabilities
- **Drag & Drop Support**: Move existing items and create new ones by dragging on empty space
- **Resize Support**: Resize items by dragging their top or bottom edge when on-item-resize is provided
- **Snap to Grid**: Vertical positions snap to 15-minute increments for move, create, and resize
- **Ghost Placeholders**: While dragging, a dashed ghost shows the target position/size
- **Responsive Design**: Automatically adjusts hour height based on container size
- **Live Time Indicator**: Shows current time position within the current week
- **Customizable Time Range**: Configure start and end hours to fit your schedule
- **Custom Content**: Fully customizable item content via slots

## Basic Usage

```vue
<template>
  <!-- Read-only planning (no interaction) -->
  <VcPlanning :items="items" />
  
  <!-- Click-only planning -->
  <VcPlanning 
    :items="items" 
    :on-item-click="handleClick" 
  />
  
  <!-- Fully interactive planning -->
  <VcPlanning 
    :items="items"
    :start-hour="8"
    :end-hour="18"
    :on-item-click="handleItemClick"
    :on-item-move="handleItemMove"
    :on-item-resize="handleItemResize"
    :on-drag-end="handleDragEnd"
    :on-week-change="handleWeekChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    id: '1',
    title: 'Team Meeting',
    startsAt: new Date(2024, 0, 15, 9, 0), 
    endsAt: new Date(2024, 0, 15, 10, 30),  
    backgroundColor: '#3b82f6',
    description: 'Weekly team sync'
  }
])

function handleItemClick(item) {
  console.log('Item clicked:', item)
}

function handleItemMove(payload) {
  console.log('Item moved:', payload)
  
}

function handleItemResize(payload) {
  console.log('Item resized:', payload)
  
}

function handleDragEnd(payload) {
  console.log('New item created:', payload)
  
}

function handleWeekChange(weekStart) {
  console.log('Week changed:', weekStart)
  
}
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `PlanningItem[]` | `[]` | Array of planning items to display |
| `startHour` | `number` | `0` | Starting hour for the planning grid (0-23) |
| `endHour` | `number` | `24` | Ending hour for the planning grid (1-24) |
| `hourHeight` | `number` | `48` | Minimum height per hour in pixels |
| `hiddenDays` | `number[]` | `[]` | Array of day numbers to hide (0=Sunday, 6=Saturday) |
| `allowDragAndDrop` | `boolean` | `true` | Enable/disable drag and drop functionality |
| `showLiveIndicator` | `boolean` | `true` | Show current time indicator |
| `scrollToHour` | `number` | `undefined` | Hour to scroll to on mount |
| `onItemClick` | `(item: PlanningItem) => void` | `undefined` | Handler for item clicks |
| `onItemMove` | `(payload: MovePayload) => void` | `undefined` | Handler for item moves |
| `onItemResize` | `(payload: ResizePayload) => void` | `undefined` | Handler for resizing an item via top/bottom edge |
| `onDragEnd` | `(payload: DragPayload) => void` | `undefined` | Handler for creating new items |
| `onWeekChange` | `(weekStart: Date) => void` | `undefined` | Handler for week navigation |

## Event Handler Types

```typescript
interface PlanningItem {
  id: string
  title: string
  startsAt: string | Date
  endsAt: string | Date
  backgroundColor?: string
  color?: string
  description?: string
}

interface MovePayload {
  item: PlanningItem
  updatedDay: string        
  updatedStart: Date
  updatedEnd: Date
}

interface ResizePayload {
  item: PlanningItem
  updatedDay: string       
  edge: 'start' | 'end'    
  updatedStart: Date
  updatedEnd: Date
}

interface DragPayload {
  day: string              
  start: Date
  end: Date
}
```

Note: VcPlanning is generic. Whatever you pass in :items must extend PlanningItem. Handlers will receive the same item type you provide.

## Interactive Behaviors

The Planning component automatically adapts its behavior based on the event handlers you provide:

### Read-Only Mode
When no event handlers are provided, items are non-interactive:
- Default cursor
- No hover effects
- No drag/drop functionality

```vue
<VcPlanning :items="items" />
```

### Click-Only Mode
When only `onItemClick` is provided:
- Pointer cursor on hover
- Hover scale effects
- Click to trigger handler

```vue
<VcPlanning 
  :items="items" 
  :on-item-click="handleClick" 
/>
```

### Drag-Only Mode
When drag handlers (`onItemMove`, `onDragEnd`) are provided:
- Grab cursor on hover
- Enhanced hover effects
- Drag existing items to move them (snaps to 15-minute grid)
- Drag on empty spaces to create a new item (visible ghost, snaps to 15-minute grid)

```vue
<VcPlanning 
  :items="items"
  :on-item-move="handleMove"
  :on-drag-end="handleCreate"
/>
```

### Resize Mode
When `onItemResize` is provided:
- Top/bottom edges are grabbable with a vertical resize cursor
- Drag to adjust start/end time (snaps to 15-minute grid)
- Dashed ghost shows the resized height while dragging

```vue
<VcPlanning 
  :items="items"
  :on-item-resize="handleResize"
  />
```

### Fully Interactive Mode
When all handlers are provided:
- Combined click and drag behaviors
- Full interaction capabilities

```vue
<VcPlanning 
  :items="items"
  :on-item-click="handleClick"
  :on-item-move="handleMove"
  :on-item-resize="handleResize"
  :on-drag-end="handleCreate"
/>
```

## Slots

### Header Actions
Add custom actions to the planning header:

```vue
<VcPlanning :items="items">
  <template #header-actions>
    <button @click="addNew">Add Event</button>
    <button @click="refresh">Refresh</button>
  </template>
</VcPlanning>
```

### Day Headers
Customize day header content:

```vue
<VcPlanning :items="items">
  <template #day-header="{ day, label, isToday }">
    <div :class="{ 'font-bold text-blue-600': isToday }">
      {{ label }}
      <span v-if="isToday">(Today)</span>
    </div>
  </template>
</VcPlanning>
```

### Hour Labels
Customize hour label formatting:

```vue
<VcPlanning :items="items">
  <template #hour-label="{ hour, label }">
    {{ hour }}:00
  </template>
</VcPlanning>
```

### Item Content
Fully customize item appearance:

```vue
<VcPlanning :items="items">
  <template #item-content="{ item, position }">
    <div class="custom-item">
      <h4>{{ item.title }}</h4>
      <p>{{ item.description }}</p>
      <small>{{ position.timeLabel }}</small>
    </div>
  </template>
</VcPlanning>
```

### Subheader
Add content between the week header and day headers:

```vue
<VcPlanning :items="items">
  <template #subheader>
    <div class="bg-yellow-50 p-2 text-center">
      Special announcement or filters
    </div>
  </template>
</VcPlanning>
```

## Styling

The component uses Tailwind CSS classes and provides visual feedback for different interaction states:

- **Non-interactive items**: Default appearance
- **Clickable items**: Pointer cursor, subtle hover scaling
- **Draggable items**: Grab cursor, enhanced hover effects
- **Dragging state**: Grabbing cursor, ghost placeholders (dashed)

You can customize item appearance using CSS custom properties or by overriding the component's classes.

## Examples

See the examples directory for complete implementation examples:
- Basic usage
- Custom content
- Drag and drop handling
- Event management
- Configuration options

## Accessibility

The component includes ARIA labels and keyboard navigation support for better accessibility. Items are rendered as buttons when interactive, providing proper focus management and screen reader support.
