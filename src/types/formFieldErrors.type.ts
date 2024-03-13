import type { z } from 'zod'

export type FormFieldErrors = null | undefined | z.ZodFormattedError<string>
