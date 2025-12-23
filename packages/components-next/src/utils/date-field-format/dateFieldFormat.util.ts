import type {
  DateFieldSegment,
  DateFieldSegmentPart,
} from '@/components/date-field/dateField.type.ts'

interface DateFormatPart {
  type: DateFieldSegmentPart
  value?: string
}

const dateFormatTokenMatcher = /([DMY]+|[^DMY]+)/gi

/**
 * Parses a date field format string into its constituent parts.
 * @param format
 * The date format string to parse.
 * @returns
 * An array of `DateFormatPart` objects representing the parsed format,
 * or `null` if the format is invalid.
 * @example
 * ```ts
 * parseDateFieldFormat('MM/DD/YYYY')
 * // Returns:
 * // [
 * //   { type: 'month' },
 * //   { type: 'literal', value: '/' },
 * //   { type: 'day' },
 * //   { type: 'literal', value: '/' },
 * //   { type: 'year' }
 * // ]
 * ```
 */
function parseDateFieldFormat(format: string): DateFormatPart[] | null {
  if (format.trim() === '') {
    return null
  }

  const tokens = format.match(dateFormatTokenMatcher)

  if (!tokens) {
    return null
  }

  const parts: DateFormatPart[] = []
  const seen = new Set<'day' | 'month' | 'year'>()

  for (const token of tokens) {
    const upperToken = token.toUpperCase()

    if (/^D+$/.test(upperToken)) {
      if (seen.has('day')) {
        return null
      }

      seen.add('day')
      parts.push({
        type: 'day',
      })

      continue
    }

    if (/^M+$/.test(upperToken)) {
      if (seen.has('month')) {
        return null
      }

      seen.add('month')
      parts.push({
        type: 'month',
      })

      continue
    }

    if (/^Y+$/.test(upperToken)) {
      if (seen.has('year')) {
        return null
      }

      seen.add('year')
      parts.push({
        type: 'year',
      })

      continue
    }

    if (/[A-Z]/i.test(token)) {
      return null
    }

    parts.push({
      type: 'literal',
      value: token,
    })
  }

  if (!seen.has('day') || !seen.has('month') || !seen.has('year')) {
    return null
  }

  return parts
}

export function formatDateFieldSegments(
  segments: DateFieldSegment[],
  format?: string | null,
): DateFieldSegment[] {
  if (!format) {
    return segments
  }

  const formatParts = parseDateFieldFormat(format)

  if (!formatParts) {
    return segments
  }

  const segmentByPart = new Map<string, DateFieldSegment>()

  for (const segment of segments) {
    if (segment.part !== 'literal') {
      segmentByPart.set(segment.part, segment)
    }
  }

  if (!segmentByPart.has('day') || !segmentByPart.has('month') || !segmentByPart.has('year')) {
    return segments
  }

  const formattedSegments: DateFieldSegment[] = []

  for (const part of formatParts) {
    if (part.type === 'literal') {
      formattedSegments.push({
        part: 'literal',
        value: part.value ?? '',
      })

      continue
    }

    const segment = segmentByPart.get(part.type)

    if (segment) {
      formattedSegments.push(segment)
    }
  }

  return formattedSegments.length > 0 ? formattedSegments : segments
}
