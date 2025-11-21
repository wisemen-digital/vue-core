---
"@wisemen/eslint-config-vue": patch
---

- Allow AppProviders.vue on source
- Allow test files in util folder, e.g. /src/util/address/address.util.spec.ts
- Allow {camelCase}.composable.ts and {camelCase}.composable.spec.ts files on root of composables folder
- Name of composables don't need to match folder name anymore
- Allow {camelCase}.routes.ts files in routes folder
- Allow import @tests/ in encapsulated folders
- Improved encapsulated folder detection logic
- Allow inter use-case imports in module folders
