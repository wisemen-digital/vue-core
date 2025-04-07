---
"@wisemen/vue-core-components": minor
---

ID attributes are now only exposed on form components; all other components will only provide a data-test-id.
This change prevents issues where id attributes could interfere with accessibility features.
