# Libraries

## Package.json

Your package.json is a magic file where you can add any and everything. It's very easy to abuse this so please follow these rules.

1. Only add a package if you really need it.
2. Update them regularly. At least once per month.
3. Fixed versions. No ~ or ^ allowed.

## Wrapping

When using a library for components, validation, etc. It's always really smart to create a wrapper around it. This will:

- Help you control and clean up the API so that only the necessary options are exposed.
- Give you the opportunity to cusomize them and add functionalty.
- If you every decide to switch the library or are required to create your own custom implementation, you already have the API defined and every usage of that component doesn't have to change.
