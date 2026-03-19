export class StringFormatUtil {
  /**
   * Format a nullable string, returning a fallback if the value is null, undefined, or blank.
   * E.g., format("hello") → "hello", format(null) → "-", format("  ") → "-".
   */
  static format(value: string | null | undefined, fallback = '-'): string {
    if (value == null || value.trim().length === 0) {
      return fallback
    }

    return value
  }

  /**
   * Mask an email address, showing only the first character of the local part.
   * E.g., "john@example.com" → "j***@example.com".
   */
  static maskEmail(email: string): string {
    const [
      local,
      domain,
    ] = email.split('@')

    if (local == null || domain == null) {
      return email
    }

    const visibleChars = Math.min(1, local.length)

    return `${local.slice(0, visibleChars)}${'*'.repeat(local.length - visibleChars)}@${domain}`
  }

  /**
   * Mask an IBAN number, showing only the country code and last 4 characters.
   * E.g., "BE68 5390 0754 7034" → "BE** **** **** 7034".
   */
  static maskIban(iban: string): string {
    const cleaned = iban.replace(/\s/g, '')

    if (cleaned.length < 8) {
      return iban
    }

    const countryCode = cleaned.slice(0, 2)
    const lastFour = cleaned.slice(-4)
    const maskedLength = cleaned.length - 2 - 4
    const masked = countryCode + '*'.repeat(maskedLength) + lastFour

    return masked.replace(/(.{4})/g, '$1 ').trim()
  }

  /**
   * Mask a phone number, preserving formatting and showing only the last 4 digits.
   * E.g., "+1 (555) 123-4567" → "+* (***) ***-4567".
   */
  static maskPhone(phone: string): string {
    const digits = phone.replace(/\D/g, '')

    if (digits.length < 4) {
      return phone
    }

    const lastFour = digits.slice(-4)
    const masked = '*'.repeat(digits.length - 4) + lastFour

    let result = ''
    let digitIndex = 0

    for (const char of phone) {
      if (/\d/.test(char)) {
        result += masked[digitIndex++]
      }
      else {
        result += char
      }
    }

    return result
  }

  /**
   * Collapse all whitespace sequences into a single space and trim.
   * E.g., "  hello   world  " → "hello world".
   */
  static normalizeWhitespace(str: string): string {
    return str.replace(/\s+/g, ' ').trim()
  }

  /**
   * Combine first and last name with null-safety.
   * E.g., toFullName("John", "Doe") → "John Doe", toFullName("John", null) → "John".
   */
  static toFullName(firstName: string | null | undefined, lastName: string | null | undefined): string {
    return [
      firstName,
      lastName,
    ]
      .filter((part): part is string => part != null && part.trim().length > 0)
      .join(' ')
  }

  /**
   * Extract initials from a full name.
   * E.g., "John Doe" → "JD", "Alice Bob Charlie" → "AB".
   */
  static toInitials(fullName: string, maxInitials = 2): string {
    return fullName
      .trim()
      .split(/\s+/)
      .filter((part) => part.length > 0)
      .map((part) => part[0].toUpperCase())
      .slice(0, maxInitials)
      .join('')
  }

  /**
   * Strip the protocol and trailing slashes from a URL for display.
   * E.g., "https://www.example.com/" → "example.com".
   */
  static toPrettyUrl(url: string): string {
    return url
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/\/+$/, '')
  }

  /**
   * Convert a string to sentence case.
   * E.g., "hello world. goodbye world" → "Hello world. Goodbye world".
   */
  static toSentenceCase(str: string): string {
    return str
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s+\w)/g, (char) => char.toUpperCase())
  }

  /**
   * Convert a string to a URL-friendly slug.
   * Strips diacritics, lowercases, and replaces spaces/special chars with hyphens.
   * E.g., "Hello Wörld!" → "hello-world".
   */
  static toSlug(str: string): string {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036F]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/[\s_]+/g, '-')
      .replace(/-+/g, '-')
  }

  /**
   * Convert a string to title case.
   * E.g., "hello world" → "Hello World".
   */
  static toTitleCase(str: string): string {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
  }

  /**
   * Truncate a string from the end if it exceeds the max length.
   * E.g., truncate("Hello world", 8) → "Hello w…".
   */
  static truncate(str: string, maxLength: number, ellipsis = '…'): string {
    if (str.length <= maxLength) {
      return str
    }

    if (maxLength <= ellipsis.length) {
      return ellipsis.slice(0, maxLength)
    }

    return str.slice(0, maxLength - ellipsis.length).trimEnd() + ellipsis
  }

  /**
   * Truncate a string from the middle if it exceeds the max length.
   * E.g., truncateMiddle("Hello world", 8) → "Hel…rld".
   */
  static truncateMiddle(
    str: string,
    maxLength: number,
    ellipsis = '…',
  ): string {
    if (str.length <= maxLength) {
      return str
    }

    if (maxLength <= ellipsis.length) {
      return ellipsis.slice(0, maxLength)
    }

    const charsToShow = maxLength - ellipsis.length
    const frontChars = Math.ceil(charsToShow / 2)
    const backChars = Math.floor(charsToShow / 2)

    return str.slice(0, frontChars) + ellipsis + str.slice(-backChars)
  }
}
