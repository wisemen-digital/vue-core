export interface DateRange<TValue extends Date> {
  from: TValue | null
  until: TValue | null
}
