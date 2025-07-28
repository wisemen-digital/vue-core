## [1.7.0] (2025-06-12)
- **Refactor to TS files:** Refactored project to use TS files.
- **Project structure:** Updated structure rules to be more flexible.


## [1.6.0] (2025-06-12)
- **Project structure:** Enforced project structure.
- **Module encapsulation:** Enforced module encapsulation.
- **Path**: Updated path rules package to flat config.
- **Wisemen:** Made custom rules package. Enabled rule `explicit-function-return-type-with-regex` and made it so composables don't require a return type.

## [1.5.1] (2025-06-05) 
- **Tailwindcss:** enforce-consistent-variable-syntax rule ignores classes with custom-.


## [1.5.0] (2025-05-28) 
- **Tailwindcss:** enforce-consistent-variable-syntax rule enabled.
- **Chore**: Updated all packages to latest versions.


## [1.4.0] (2025-05-28) 
- **Tailwindcss:** Updated to eslint-plugin-better-tailwind, enabling conflicted classes and unregistered classes rules.

## [1.2.0] (2025-04-09)
- **Rules:** Removed all putout rules and refactored them to different ones.
- **Formatting** Formatting for CSS files.


## [1.1.0] (2025-03-26)
- **Readable tailwind:** Added readable tailwind rules.


## [1.0.0] (2025-03-26)
- **Updated packages:** Updated all packages to latest.
- **A11y rules:** Added a11y rules.

## [1.0.0-next.1] (2025-03-06)
- **Updated packages:** Updated all packages to latest.
- **Updated putout:** Uses flat config.
- **Updated perfectionist:** Uses regex for pattern matching.
- **Disabled Tailwind:** Disabled Tailwind rules, not updated to 4.0.
- **Tests:** Added tests for spacing and perfectionist rules.
- **Unicorn:** Added unicorn rules.
  - * catch-error-name
    * consistent-destructuring
    * consistent-empty-array-spread
    * consistent-existence-index-check
    * error-message
    * expiring-todo-comments
    * explicit-length-check
    * no-accessor-recursion
    * no-anonymous-default-export
    * no-array-for-each
    * no-array-method-this-argument
    * no-array-push-push
    * no-await-expression-member
    * no-await-in-promise-methods
    * no-empty-file
    * no-for-loop
    * no-nested-ternary
    * no-single-promise-in-promise-methods
    * no-unnecessary-await
    * no-unreadable-array-destructuring
    * no-useless-fallback-in-spread
    * no-useless-length-check
    * no-useless-switch-case
    * no-useless-undefined
    * number-literal-case
    * numeric-separators-style
    * prefer-array-find
    * prefer-array-flat
    * prefer-array-flat-map
    * prefer-array-index-of
    * prefer-array-some
    * prefer-at
    * prefer-date-now
    * prefer-includes
    * prefer-logical-operator-over-ternary
    * prefer-math-min-max
    * prefer-set-has
    * prefer-set-size
    * prefer-switch
    * template-indent
    * throw-new-error


## [0.2.3] (2024-11-14)
- **Fix typescript:** Typescript to true in factory.

## [0.2.2] (2024-11-12)
- **Max depth:** Added rule to enforce max depth of 3.
- **No nested turnary:** Added rule to enforce no nested ternary, which I hope doesn't happen already.


## [0.2.1] (2024-11-12)
- **Type rules:** Removed type rules, it has performance issues with large projects.
- **Packages:** Updated packages to latest versions.
- **Consistent function scoping** Added rule to enforce consistent function scoping.


## [0.2.0] (2024-09-05)
- **Updated packages:** Updated packages to latest versions.
- **Ordening:** Added sorting for unions.
- **Ordening:** Don't ignore casing for sorting. Example: A, B, a, b instead of A, a, B, b.
- **Type rules:** Reenabled type rules.
- **Function scoping:** Added function scoping rule.
- **Consistent chaining:** Added consistent chaining rule.
- **Cypress removed:** Removed cypress rules.
- **Putout removed:** Removed unnecessary putout rules.
- **Vitest:** Added vitest rules.


## [0.1.3] (2024-06-13)
- **Tailwind:** Allow classes starting with `custom-` in tailwind.


## [0.1.2] (2024-06-12)
- **Ordening:** Removed ordening from objects named `variants`, as it is of functional significance in style libraries like cva.
- **Ordening:** Moved name before unknown in object ordering.
- **Imports:** Disabled rule that requires file extensions in imports it is a doesn't work with .'s in the file name.


## [0.1.1] (2024-05-31)
- **Ordening:** Added ordering rules for routes declaration

## [0.1.0] (2024-05-13)
- **Upgrade:** Upgraded to eslint 9.3 and updated dependencies.
- **Tailwind:** Added eslint-tailwind flat config support.
- **Chore:** Removed unused eslint-import dependency.

## [0.0.18] (2024-05-13)
- **Imports:** Added rule that requires file extensions in imports
- **Parens:** Added rule that requires parens around arrow function arguments

## [0.0.17] (2024-05-01)
- **Ordening:** Added uuid ordering and better date matching
- **Fix:** Disabled putout rule that was causing problem's


## [0.0.16] (2024-05-01)
- **Refactor:** Split rules in different files
- **Fix:** Re-added return type


## [0.0.15] (2024-04-30)
- **Imports:** Require absolute imports for anything about 1 depth

## [0.0.12] (2024-04-10)

### Features
- **9.0 upgrade:** Upgraded to eslint 9.0.
- **I18n:** Vue-i18n to flat config.

## [0.0.11] (2024-04-09)

### Features
- **Sorting:** Better object, interface and type sorting.
- **Spacing:** Moved some spacing rules from putout to default style linting.

### Improvements
- **Grouping:** Grouped rules a bit better with flatconfig.
