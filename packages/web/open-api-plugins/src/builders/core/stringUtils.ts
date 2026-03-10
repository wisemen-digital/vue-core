/**
 * String utilities for code generation
 */

/**
 * Converts a string to PascalCase
 * @param str - Input string
 * @returns PascalCase string
 */
export function toPascal(str: string): string {
  return str
    .replace(/([_-]+|\s+)([a-z0-9])/gi, (_, __, c) => c.toUpperCase())
    .replace(/^[a-z]/, (c) => c.toUpperCase())
}

/**
 * Creates a safe TypeScript type name by removing invalid characters
 * @param name - Input name
 * @returns Safe type name
 */
export function safeTypeName(name: string): string {
  return name.replace(/\W/g, '_')
}

/**
 * Normalizes common type name prefixes (UI -> Ui, API -> Api, etc.)
 * @param typeName - Input type name
 * @returns Normalized type name
 */
export function normalizeTypeName(typeName: string): string {
  return typeName
    .replace(/^UI([A-Z])/g, 'Ui$1')
    .replace(/^API([A-Z])/g, 'Api$1')
    .replace(/^HTTP([A-Z])/g, 'Http$1')
    .replace(/^URL([A-Z])/g, 'Url$1')
    .replace(/^ID([A-Z])/g, 'Id$1')
}

/**
 * Checks if a property name is a valid JavaScript identifier
 * @param key - Property name to check
 * @returns True if valid identifier
 */
export function isValidIdentifier(key: string): boolean {
  return /^[a-z_]\w*$/i.test(key)
}

/**
 * Makes a property name safe for code generation
 * @param key - Property name
 * @returns Quoted key if needed, otherwise raw key
 */
export function safePropName(key: string): string {
  return isValidIdentifier(key) ? key : `"${key}"`
}
