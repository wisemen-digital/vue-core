type EditableSegmentPart = 'day' | 'dayPeriod' | 'hour' | 'minute' | 'month' | 'second' | 'year'
type NonEditableSegmentPart = 'literal' | 'timeZoneName'

export type DateFieldSegmentPart = EditableSegmentPart | NonEditableSegmentPart

export interface DateFieldSegment {
  part: DateFieldSegmentPart
  value: string
}
