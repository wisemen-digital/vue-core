import { useContext } from '@/packages/@next/shared/context.composable'

interface SelectGroupContext {
  id: string
  labelId: string
}

export const [
  useProvideSelectGroupContext,
  useInjectSelectGroupContext,
] = useContext<SelectGroupContext>('selectGroupContext')
