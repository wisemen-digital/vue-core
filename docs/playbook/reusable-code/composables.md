#### [Reusable Code](/playbook/reusable-code.md)

# Composable

Composables are a piece of reusable logic that contain state and or use vue specific reactivity like refs, computed,
etc. A good example is the `saving.ts`
composable.

Composables always use the `use...` prefix in their function name. and are suffixed with `.composable.ts`.

```typescript
//Good example of a composable
import { ref } from "vue";

export const useSaving = () => {
  const savingRef = ref(false);

  const setSaving = (value: boolean): void => {
    savingRef.value = value;
  };

  const isSaving = (): boolean => savingRef.value;

  return {
    setSaving,
    isSaving,
  };
};
```
