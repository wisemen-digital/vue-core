# Planning Component Meta

## Overview
A flexible planning/calendar component with intelligent interaction adaptation based on provided event handlers.

## Key Features
- Props-based event handling (no Vue events)
- Automatic visual feedback based on interaction capabilities
- Drag & drop support with visual indicators
- Responsive hour height calculation
- Live time indicator
- Customizable slots for all content areas
- Item resizing via top/bottom edges when onItemResize is provided

## Breaking Changes from Previous Version
- Removed `padding` prop - planning now shows exact hour range
- Moved from Vue events to props-based handlers
- Enhanced visual feedback system based on provided handlers

## Component Props Summary
```typescript
interface PlanningProps {
  items: PlanningItem[]
  startHour?: number        
  endHour?: number          
  hourHeight?: number       
  hiddenDays?: number[]     
  allowDragAndDrop?: boolean 
  showLiveIndicator?: boolean 
  scrollToHour?: number
  
  // Event handlers (props, not events)
  onItemClick?: (item: PlanningItem) => void
  onItemMove?: (payload: MovePayload) => void
  onItemResize?: (payload: ResizePayload) => void
  onDragEnd?: (payload: DragPayload) => void
  onWeekChange?: (weekStart: Date) => void
}

interface ResizePayload {
  item: PlanningItem
  updatedDay: string
  edge: 'start' | 'end'
  updatedStart: Date
  updatedEnd: Date
}
```

## Interaction Modes
1. **Read-Only**: No handlers → non-interactive display
2. **Click-Only**: Only `onItemClick` → clickable items
3. **Drag-Only**: Only drag handlers → moveable/creatable items  
4. **Fully Interactive**: All handlers → complete interaction
5. **Resize**: `onItemResize` → resizable items via top/bottom edges

## Visual Feedback System
- **Default cursor**: Non-interactive items
- **Pointer cursor + hover effects**: Clickable items
- **Grab cursor + enhanced hover**: Draggable items
- **Grabbing cursor + visual changes**: During drag operations
- **NS-resize cursor on edges**: When `onItemResize` is provided, the item's top/bottom edges show a vertical resize cursor and can be dragged
