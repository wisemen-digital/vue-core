import { unrefElement } from '@vueuse/core'
import {
  inject,
  type InjectionKey,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  provide,
  type Ref,
  ref,
  watch,
} from 'vue'

const ITEM_DATA_ATTR = 'data-radix-vue-collection-item'

type ContextValue = Ref<HTMLElement[]>
/**
 * Composables for provide/inject collections
 * @param key (optional) Name to replace the default `Symbol()` as provide's key
 * @param name (optional) Name to replace the default `ITEM_DATA_ATTR` for the item's attirbutes
 */
export function useCollection(key?: string, name = ITEM_DATA_ATTR) {
  const COLLECTION_SYMBOL = key ?? (Symbol('') as InjectionKey<ContextValue>)

  function createCollection(sourceRef?: Ref<HTMLElement | undefined>) {
    // eslint-disable-next-line require-explicit-generics/require-explicit-generics
    const items = ref([]) as Ref<HTMLElement[]> // ref<HTMLElement[]> is causing type inference issue

    function setCollection() {
      const sourceEl = unrefElement(sourceRef)
      if (sourceEl === undefined) {
        return (items.value = [])
      }

      return (items.value = Array.from(
        sourceEl.querySelectorAll(`[${name}]:not([data-disabled])`),
      ) as HTMLElement[])
    }

    onBeforeUpdate(() => {
      items.value = []
    })

    onMounted(setCollection)
    onUpdated(setCollection)

    watch(() => sourceRef?.value, setCollection, { immediate: true })

    provide(COLLECTION_SYMBOL, items)

    return items
  }

  function injectCollection() {
    // eslint-disable-next-line require-explicit-generics/require-explicit-generics
    return inject(COLLECTION_SYMBOL, ref([]))
  }

  return { createCollection, injectCollection }
}
