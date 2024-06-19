import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useSkeletonLoaderStyle = tv({
  slots: {
    button: 'h-10 rounded-md bg-neutral-100',
    pageContainer: 'flex w-full flex-1 flex-col bg-background',
    pageContentButton: 'w-40',
    pageContentContainer: 'flex items-center justify-between',
    pageContentRow: 'w-60',
    pageFlex: 'flex flex-col gap-y-2',
    pageHeaderContainer: 'flex items-center gap-x-2',
    pageHeaderIcon: 'text-muted',
    pageHeaderRow: 'w-32',
    pagePadding: 'pb-2 pt-10',
    row: 'h-5 rounded-md bg-neutral-100',
    rowContainer: 'flex flex-col gap-y-4 p-4',
  },
})

export type SkeletonLoaderStyleProps = VariantProps<typeof useSkeletonLoaderStyle>
