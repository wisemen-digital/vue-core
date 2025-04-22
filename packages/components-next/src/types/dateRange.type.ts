export interface DateRange<TValue extends Date = Date> {
  from: TValue | null
  until: TValue | null
}
