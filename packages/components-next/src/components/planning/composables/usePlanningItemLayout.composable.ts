import type { ComputedRef } from 'vue'
import { computed } from 'vue'

import type { PlanningItem } from '@/components/planning/planning.types'

interface ItemWithTimes extends PlanningItem {
  end: number
  start: number
}

interface ItemCluster {
  endTime: number
  items: ItemWithTimes[]
}

interface LaneLayout {
  left: number
  width: number
}

function sortItemsByTime(items: PlanningItem[]): PlanningItem[] {
  return items.slice().sort((a, b) => {
    const startA = new Date(a.startsAt).getTime()
    const startB = new Date(b.startsAt).getTime()

    if (startA !== startB) {
      return startA - startB
    }

    return new Date(a.endsAt).getTime() - new Date(b.endsAt).getTime()
  })
}

function addTimestampsToItems(items: PlanningItem[]): ItemWithTimes[] {
  return items.map((item) => ({
    ...item,
    end: new Date(item.endsAt).getTime(),
    start: new Date(item.startsAt).getTime(),
  }))
}

function findAvailableLane(item: ItemWithTimes, laneEndTimes: number[]): number {
  for (let laneIndex = 0; laneIndex < laneEndTimes.length; laneIndex++) {
    const endTime = laneEndTimes[laneIndex]

    if (endTime !== undefined && endTime <= item.start) {
      laneEndTimes[laneIndex] = item.end

      return laneIndex
    }
  }

  laneEndTimes.push(item.end)

  return laneEndTimes.length - 1
}

function assignLanesToCluster(cluster: ItemWithTimes[]): Map<string, number> {
  const laneEndTimes: number[] = []
  const itemLaneMap = new Map<string, number>()

  for (const item of cluster) {
    const laneIndex = findAvailableLane(item, laneEndTimes)

    itemLaneMap.set(item.id, laneIndex)
  }

  return itemLaneMap
}

function createOverlapCluster(items: ItemWithTimes[], startIndex: number): ItemCluster {
  const cluster: ItemWithTimes[] = []
  let clusterEndTime = -Infinity
  let currentIndex = startIndex

  function addItemToCluster(item: ItemWithTimes): void {
    cluster.push(item)
    clusterEndTime = Math.max(clusterEndTime, item.end)
  }

  while (currentIndex < items.length) {
    const currentItem = items[currentIndex]

    if (!currentItem) {
      break
    }

    if (cluster.length === 0) {
      addItemToCluster(currentItem)
      currentIndex++

      continue
    }

    if (currentItem.start >= clusterEndTime) {
      break
    }

    addItemToCluster(currentItem)
    currentIndex++
  }

  return {
    endTime: clusterEndTime,
    items: cluster,
  }
}

function calculateClusterLayout(cluster: ItemCluster): Record<string, LaneLayout> {
  const itemLaneMap = assignLanesToCluster(cluster.items)
  const totalLanes = Math.max(1, Array.from(itemLaneMap.values()).length > 0
    ? Math.max(...itemLaneMap.values()) + 1
    : 1)
  const laneWidthPercent = 100 / totalLanes

  const layout: Record<string, LaneLayout> = {}

  for (const item of cluster.items) {
    const laneIndex = itemLaneMap.get(item.id) ?? 0
    const leftPercent = laneWidthPercent * laneIndex

    layout[item.id] = {
      left: leftPercent,
      width: laneWidthPercent,
    }
  }

  return layout
}

function createItemLayout(items: PlanningItem[]): Record<string, LaneLayout> {
  const sortedItems = sortItemsByTime(items)
  const itemsWithTimes = addTimestampsToItems(sortedItems)
  const layout: Record<string, LaneLayout> = {}

  let currentIndex = 0

  while (currentIndex < itemsWithTimes.length) {
    const cluster = createOverlapCluster(itemsWithTimes, currentIndex)
    const clusterLayout = calculateClusterLayout(cluster)

    Object.assign(layout, clusterLayout)

    currentIndex += cluster.items.length
  }

  return layout
}

export function usePlanningItemLayout(items: ComputedRef<PlanningItem[]> | PlanningItem[]): {
  laneLayout: ComputedRef<Record<string, LaneLayout>>
} {
  const laneLayout = computed<Record<string, LaneLayout>>(() => {
    const itemsValue = Array.isArray(items) ? items : items.value

    return createItemLayout(itemsValue)
  })

  return {
    laneLayout,
  }
}
