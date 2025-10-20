import type { Ref } from 'vue'
import {
  computed,
  ref,
} from 'vue'

import type {
  PlanningDragPayload,
  PlanningItem,
  PlanningMovePayload,
  PlanningResizePayload,
} from '@/components/planning/planning.types'

export interface UsePlanningDragDropOptions<T extends PlanningItem = PlanningItem> {
  endHour: number | Ref<number>
  hourHeight: number | Ref<number>
  startHour: number | Ref<number>
  onDragEnd?: (payload: PlanningDragPayload) => void
  onItemMove?: (payload: PlanningMovePayload<T>) => void
  onItemResize?: (payload: PlanningResizePayload<T>) => void
}

const DRAG_THRESHOLD_PX = 6

type DragMode = 'create' | 'move' | 'resize' | null

function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max)
}

function getDayHitAt(clientX: number, clientY: number): {
  day: string | null
  el: HTMLElement | null
  rect: DOMRect | null
} {
  const el = document.elementFromPoint(clientX, clientY) as HTMLElement | null
  const dayColumn = el?.closest('[data-planning-day]') as HTMLElement | null

  if (!dayColumn) {
    return {
      day: null,
      el: null,
      rect: null,
    }
  }

  const day = dayColumn.getAttribute('data-planning-day')

  return {
    day: day || null,
    el: dayColumn,
    rect: dayColumn.getBoundingClientRect(),
  }
}

export function usePlanningDragDrop<T extends PlanningItem = PlanningItem>(options: UsePlanningDragDropOptions<T>) {
  const {
    endHour,
    hourHeight,
    startHour,
    onDragEnd,
    onItemMove,
    onItemResize,
  } = options

  const isDragging = ref<boolean>(false)
  const isDragCreate = ref<boolean>(false)
  const isResizing = ref<boolean>(false)
  const resizeEdge = ref<'end' | 'start' | null>(null)
  const draggedItem = ref<T | null>(null)

  const isAwaitingThreshold = ref<boolean>(false)
  const dragMode = ref<DragMode>(null)
  const dragCandidateItem = ref<T | null>(null)

  const dragStartPosition = ref<{ x: number
    y: number }>({
    x: 0,
    y: 0,
  })
  const dragCurrentPosition = ref<{ x: number
    y: number }>({
    x: 0,
    y: 0,
  })
  const dragGhostPosition = ref<{ day: string
    height: number
    top: number }>({
    day: '',
    height: 0,
    top: 0,
  })
  const createGhostPosition = ref<{ day: string
    height: number
    top: number }>({
    day: '',
    height: 0,
    top: 0,
  })
  const dragGrabOffsetY = ref<number>(0)

  const dragOffset = computed<{ x: number
    y: number }>(() => ({
    x: dragCurrentPosition.value.x - dragStartPosition.value.x,
    y: dragCurrentPosition.value.y - dragStartPosition.value.y,
  }))

  function getHourHeight(): number {
    return typeof hourHeight === 'number' ? hourHeight : hourHeight.value
  }

  function getStartHour(): number {
    return typeof startHour === 'number' ? startHour : startHour.value
  }

  function getEndHour(): number {
    return typeof endHour === 'number' ? endHour : endHour.value
  }

  function quarterHeight(): number {
    return getHourHeight() / 4
  }

  function snapToQuarter(px: number): number {
    const q = quarterHeight()

    return Math.round(px / q) * q
  }

  function commitMoveDrag(initEvent: MouseEvent, item: T): void {
    isAwaitingThreshold.value = false
    isDragging.value = true
    draggedItem.value = item
    updateGhostPosition(initEvent)
  }

  function commitCreateDrag(initEvent: MouseEvent): void {
    isAwaitingThreshold.value = false
    isDragCreate.value = true
    updateGhostPosition(initEvent)
  }

  function commitResizeDrag(initEvent: MouseEvent, item: T): void {
    isAwaitingThreshold.value = false
    isResizing.value = true
    draggedItem.value = item
    updateGhostPosition(initEvent)
  }

  function startDrag(item: T, event: MouseEvent): void {
    dragMode.value = 'move'
    isAwaitingThreshold.value = true
    dragCandidateItem.value = item

    dragStartPosition.value = {
      x: event.clientX,
      y: event.clientY,
    }
    dragCurrentPosition.value = {
      x: event.clientX,
      y: event.clientY,
    }

    const hit = getDayHitAt(event.clientX, event.clientY)

    if (hit.rect) {
      const start = new Date(item.startsAt)
      const startHourValue = getStartHour()
      const hourHeightValue = getHourHeight()
      const itemTopPx = (start.getHours() + start.getMinutes() / 60 - startHourValue) * hourHeightValue
      const relativeY = event.clientY - hit.rect.top

      dragGrabOffsetY.value = relativeY - itemTopPx
    }
    else {
      dragGrabOffsetY.value = 0
    }

    document.addEventListener('mousemove', handleDragMove)
    document.addEventListener('mouseup', handleDragEnd)
    document.body.style.userSelect = 'none'
  }

  function startResize(item: T, edge: 'end' | 'start', event: MouseEvent): void {
    if (!onItemResize) {
      return
    }

    dragMode.value = 'resize'
    resizeEdge.value = edge
    isAwaitingThreshold.value = true
    dragCandidateItem.value = item

    dragStartPosition.value = {
      x: event.clientX,
      y: event.clientY,
    }
    dragCurrentPosition.value = {
      x: event.clientX,
      y: event.clientY,
    }

    document.addEventListener('mousemove', handleDragMove)
    document.addEventListener('mouseup', handleDragEnd)
    document.body.style.userSelect = 'none'
  }

  function handleDragMove(event: MouseEvent): void {
    if (!isDragging.value && !isDragCreate.value && !isAwaitingThreshold.value && !isResizing.value) {
      return
    }

    dragCurrentPosition.value = {
      x: event.clientX,
      y: event.clientY,
    }

    if (isAwaitingThreshold.value) {
      const dx = dragCurrentPosition.value.x - dragStartPosition.value.x
      const dy = dragCurrentPosition.value.y - dragStartPosition.value.y
      const distance = Math.hypot(dx, dy)

      if (distance < DRAG_THRESHOLD_PX) {
        return
      }

      if (dragMode.value === 'move' && dragCandidateItem.value) {
        commitMoveDrag(event, dragCandidateItem.value)
      }
      else if (dragMode.value === 'create') {
        commitCreateDrag(event)
      }
      else if (dragMode.value === 'resize' && dragCandidateItem.value) {
        commitResizeDrag(event, dragCandidateItem.value)
      }
    }

    updateGhostPosition(event)
  }

  function updateGhostPosition(event: MouseEvent): void {
    const hit = getDayHitAt(event.clientX, event.clientY)

    if (hit.day && hit.rect) {
      const {
        day, rect,
      } = hit
      const hourHeightValue = getHourHeight()
      const totalHeight = (getEndHour() - getStartHour()) * hourHeightValue

      if (isDragging.value && draggedItem.value) {
        const itemDuration = getItemDuration(draggedItem.value)
        const rawTop = event.clientY - rect.top - dragGrabOffsetY.value
        const height = (itemDuration / (1000 * 60 * 60)) * hourHeightValue
        const maxTop = Math.max(0, totalHeight - Math.max(20, height))
        const snappedTop = clamp(snapToQuarter(rawTop), 0, maxTop)

        dragGhostPosition.value = {
          day,
          height: Math.max(20, height),
          top: snappedTop,
        }
      }
      else if (isDragCreate.value) {
        const startRelative = dragStartPosition.value.y - rect.top
        const currentRelative = event.clientY - rect.top
        const snappedStart = clamp(snapToQuarter(startRelative), 0, Math.max(0, totalHeight))
        const snappedCurrent = clamp(snapToQuarter(currentRelative), 0, Math.max(0, totalHeight))
        const top = Math.min(snappedStart, snappedCurrent)
        const rawHeight = Math.abs(snappedCurrent - snappedStart)
        const height = Math.max(quarterHeight(), rawHeight)

        createGhostPosition.value = {
          day,
          height,
          top,
        }
      }
      else if (isResizing.value && draggedItem.value && resizeEdge.value) {
        const originalStart = new Date(draggedItem.value.startsAt)
        const originalEnd = new Date(draggedItem.value.endsAt)
        const originalStartPx = (
          originalStart.getHours() + originalStart.getMinutes() / 60 - getStartHour()
        ) * hourHeightValue
        const originalEndPx = (
          originalEnd.getHours() + originalEnd.getMinutes() / 60 - getStartHour()
        ) * hourHeightValue

        const currentRelative = event.clientY - rect.top
        const snappedCurrent = clamp(snapToQuarter(currentRelative), 0, Math.max(0, totalHeight))

        let top = originalStartPx
        let bottom = originalEndPx

        if (resizeEdge.value === 'start') {
          top = Math.min(snappedCurrent, originalEndPx - quarterHeight())
        }
        else { bottom = Math.max(snappedCurrent, originalStartPx + quarterHeight()) }

        const clampedTop = clamp(top, 0, totalHeight - quarterHeight())
        const clampedBottom = clamp(bottom, quarterHeight(), totalHeight)
        const height = Math.max(quarterHeight(), clampedBottom - clampedTop)

        dragGhostPosition.value = {
          day,
          height,
          top: clampedTop,
        }
      }
    }
  }

  function handleDragEnd(event: MouseEvent): void {
    if (!isDragging.value && !isDragCreate.value && !isResizing.value && isAwaitingThreshold.value) {
      cleanup()

      return
    }

    if (!isDragging.value && !isDragCreate.value && !isResizing.value) {
      cleanup()

      return
    }

    const hit = getDayHitAt(event.clientX, event.clientY)

    if (isDragging.value && draggedItem.value && onItemMove && hit.day && hit.rect) {
      const hourHeightValue = getHourHeight()
      const startHourValue = getStartHour()
      const totalHeight = (getEndHour() - startHourValue) * hourHeightValue

      const rawTop = event.clientY - hit.rect.top - dragGrabOffsetY.value
      const itemHeight = (getItemDuration(draggedItem.value) / (1000 * 60 * 60)) * hourHeightValue
      const maxTop = Math.max(0, totalHeight - Math.max(20, itemHeight))
      const snappedTop = dragGhostPosition.value.day === hit.day
        ? clamp(dragGhostPosition.value.top, 0, maxTop)
        : clamp(snapToQuarter(rawTop), 0, maxTop)

      const hourOffset = snappedTop / hourHeightValue
      const newStartHour = startHourValue + hourOffset

      const newStartTime = new Date(`${hit.day}T00:00:00`)
      const hours = Math.floor(newStartHour)
      const minutes = Math.round((newStartHour % 1) * 60)

      newStartTime.setHours(hours, minutes, 0, 0)

      const itemDuration = getItemDuration(draggedItem.value)
      const newEndTime = new Date(newStartTime)

      newEndTime.setTime(newEndTime.getTime() + itemDuration)

      onItemMove({
        item: draggedItem.value,
        updatedDay: hit.day,
        updatedEnd: newEndTime,
        updatedStart: newStartTime,
      })
    }
    else if (isDragCreate.value && onDragEnd) {
      const {
        day,
        height,
        top,
      } = createGhostPosition.value

      if (day) {
        const hourHeightValue = getHourHeight()
        const startHourValue = getStartHour()

        const startOffset = top / hourHeightValue
        const endOffset = (top + height) / hourHeightValue

        const startTime = new Date(`${day}T00:00:00`)

        startTime.setHours(
          Math.floor(startHourValue + startOffset),
          Math.round(((startHourValue + startOffset) % 1) * 60),
          0,
          0,
        )

        const endTime = new Date(`${day}T00:00:00`)

        endTime.setHours(
          Math.floor(startHourValue + endOffset),
          Math.round(((startHourValue + endOffset) % 1) * 60),
          0,
          0,
        )

        onDragEnd({
          day,
          end: endTime,
          start: startTime,
        })
      }
    }
    else if (isResizing.value && draggedItem.value && resizeEdge.value && onItemResize && hit.day && hit.rect) {
      const hourHeightValue = getHourHeight()
      const startHourValue = getStartHour()

      const {
        height, top,
      } = dragGhostPosition.value

      const startOffset = top / hourHeightValue
      const endOffset = (top + height) / hourHeightValue

      const newStartTime = new Date(`${hit.day}T00:00:00`)

      newStartTime.setHours(
        Math.floor(startHourValue + startOffset),
        Math.round(((startHourValue + startOffset) % 1) * 60),
        0,
        0,
      )

      const newEndTime = new Date(`${hit.day}T00:00:00`)

      newEndTime.setHours(
        Math.floor(startHourValue + endOffset),
        Math.round(((startHourValue + endOffset) % 1) * 60),
        0,
        0,
      )

      onItemResize({
        edge: resizeEdge.value,
        item: draggedItem.value,
        updatedDay: hit.day,
        updatedEnd: newEndTime,
        updatedStart: newStartTime,
      })
    }

    cleanup()
  }

  function handleDragCreate(day: string, event: MouseEvent): void {
    if (!onDragEnd) {
      return
    }

    dragMode.value = 'create'
    isAwaitingThreshold.value = true
    isDragCreate.value = false
    isDragging.value = false
    draggedItem.value = null

    dragStartPosition.value = {
      x: event.clientX,
      y: event.clientY,
    }

    dragCurrentPosition.value = {
      x: event.clientX,
      y: event.clientY,
    }

    document.addEventListener('mousemove', handleDragMove)
    document.addEventListener('mouseup', handleDragEnd)
    document.body.style.userSelect = 'none'
  }

  function getItemDuration(item: PlanningItem): number {
    const start = new Date(item.startsAt)
    const end = new Date(item.endsAt)

    return end.getTime() - start.getTime()
  }

  function cleanup(): void {
    isDragging.value = false
    isDragCreate.value = false
    isResizing.value = false
    isAwaitingThreshold.value = false
    dragMode.value = null
    dragCandidateItem.value = null
    draggedItem.value = null
    resizeEdge.value = null
    dragGhostPosition.value = {
      day: '',
      height: 0,
      top: 0,
    }
    createGhostPosition.value = {
      day: '',
      height: 0,
      top: 0,
    }
    dragGrabOffsetY.value = 0
    document.removeEventListener('mousemove', handleDragMove)
    document.removeEventListener('mouseup', handleDragEnd)
    document.body.style.userSelect = ''
  }

  return {
    isDragCreate,
    isDragging,
    isResizing,
    createGhostPosition,
    draggedItem,
    dragGhostPosition,
    dragOffset,
    handleDragCreate,
    startDrag,
    startResize,
  }
}
