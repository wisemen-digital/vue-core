import type { z } from 'zod'

export type FormFieldErrors<T = string> = null | undefined | z.ZodFormattedError<T>
