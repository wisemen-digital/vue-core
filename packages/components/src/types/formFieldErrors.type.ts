import type { z } from 'zod'

export type FormFieldErrors<T = string> = z.ZodFormattedError<T> | null | undefined
