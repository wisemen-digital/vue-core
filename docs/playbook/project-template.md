# Wisemen Vue Project Template

This templated will help you to create great applications at Wisemen.

## Repository

You can find the repository [on Github](https://github.com/wisemen-digital/frontend-project-template)

### Demo

To see a demo of the project template, you can visit [vue-project-template.wisemen.digital](https://vue-project-template.wisemen.digital/)

### Table of contents

- [Recommended IDE Setup](#recommended-ide-setup)
- [Project setup](#project-setup)
  - [Clone repo and install dependencies](#clone-repo-and-install-dependencies)
  - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
  - [Clean the project before pushing changes](#clean-the-project-before-pushing-changes)
- [Code Style](#code-style)
- [Structure](#structure)
- [Components](#components)
- [Authentication](#authentication)
- [Form validation](#form-validation)
- [Sentry](#sentry)
- [PWA (Progressive Web App)](#pwa-progressive-web-app)
- [Testing your application](#testing-your-application)
  - [Unit Tests](#unit-tests)
  - [E2E Tests](#e2e-tests)
- [Debugging your application](#debugging-your-application)
  - [Vue Devtools](#vue-devtools)
  - [A full reload happens instead of HMR](#a-full-reload-happens-instead-of-hmr)
  - [Check the project bundle](#check-the-project-bundle)

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
- [Webstorm](https://www.jetbrains.com/webstorm/)

## Project setup

### Clone repo and install dependencies

```bash
pnpm install
```

### Compiles and hot-reloads for development

```bash
pnpm dev
```

### Clean the project before pushing changes

This command will automatically run the linting, type checking, unit tests, e2e tests, and build the project.

```bash
pnpm clean
```

## Code Style

The project template uses the [Wisemen ESLint configuration](https://github.com/wisemen-digital/eslint-config-vue) for automatic code formatting and linting.

TODO add our preferences and examples

## Structure

The application uses a module based structure with vertical slices (features).

Each vertical slice is a folder in the `src/modules` directory.
Each module contains multiple features which group together related functionality.

- `components`: contains the components used in the vertical slice.
- `api/services`: services for fetching data from the backend.
- `api/queries`: queries for handling server state cache
- `api/mutations`: mutations for handling actions (create, update, delete) on the server
- `views`: contains the pages used in the vertical slice.
- `services`: contains the services used in the vertical slice.

## Components

The project template uses the Wisemen component library. TODO @robbe

> TODO @robbe add link to component docs and some explanation maybe?

## Authentication

The project template uses the Wisemen authentication library. TODO @wouter

> TODO @wouter add link to auth docs and env variables config explanation

## Form validation

The project template uses the Formango validation library.

> TODO @robbe add link to formango and zod docs and maybe some explanation?

## Sentry

The project template uses [Sentry](https://docs.sentry.io/platforms/javascript/) for error tracking.

To use Sentry, you need to add some environment variable to your `.env` file or GitHub secrets.

### VITE_SENTRY_DSN

The DSN for your Sentry project. This is the most important environment variable and is required for Sentry to work.
You can ask your project manager, team lead or a Sysops Engineer for the DSN.

```env
VITE_SENTRY_DSN='YOUR_SENTRY_DSN'
```

### VITE_SENTRY_AUTH_TOKEN

The auth token for your Sentry project. This is required for Sentry to work.
You can ask your project manager, team lead or a Sysops Engineer for the auth token.

```env
VITE_SENTRY_AUTH_TOKEN='YOUR_SENTRY_AUTH_TOKEN'
```

### VITE_SENTRY_SAMPLE_RATE

The sample rate for Sentry. This is a number between 0 and 1. It represents the percentage of errors that will be sent to Sentry.

```env
VITE_SENTRY_SAMPLE_RATE=1
```

### Other needed environment variables

Some other neccessary environment variables for Sentry.

```env
VITE_SENTRY_ORG='wisemen'
VITE_SENTRY_PROJECT='YOUR_PROJECT_NAME'
VITE_SENTRY_URL='https://sentry.appwi.se'
VITE_ENVIRONMENT='development'
VITE_APP_VERSION=$npm_package_version
```

### GitHub Actions

If you are using GitHub actions, make sure to included the following settings. Note that these secrets also have to be added to your GitHub secrets.

```yaml
- uses: actions/checkout@v3
  with:
    fetch-depth: 0

- name: Create Sentry release
  uses: getsentry/action-release@v1
  env:
    SENTRY_AUTH_TOKEN: ${{ secrets.SENTRY_AUTH_TOKEN }}
    SENTRY_ORG: ${{ vars.SENTRY_ORG }}
    SENTRY_PROJECT: ${{ vars.SENTRY_PROJECT }}
    SENTRY_URL: ${{ vars.SENTRY_URL }}
```

## PWA (Progressive Web App)

The project template uses [Vite PWA](https://vite-pwa-org.netlify.app/) for PWA support.

You only need to update the vitest.config with your project name, description, and icons.

## Testing your application

### Unit Tests

Unit tests are written using [Vitest](https://vitest.dev/). To run the unit tests, run:

```bash
pnpm test:unit
```

### E2E Tests

E2E tests are written using [Playwright](https://playwright.dev/). To run the e2e tests, run:

```bash
pnpm test:e2e
```

## Debugging your application

### Vue Devtools

The project template comes with Vue Devtools installed. To use it, install the [Vue Devtools extension](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg) for Chrome.

### A full reload happens instead of HMR

- If HMR is not handled by Vite or a plugin, a full reload will happen as it's the only way to refresh the state.
- If HMR is handled but it is within a circular dependency,
  a full reload will also happen to recover the execution order.

To solve this, try breaking the loop.
You can run `vite --debug hmr` to log the circular dependency path if a file change triggered it.

### Check the project bundle

We can use the [vite-bundle-visualizer](https://www.npmjs.com/package/vite-bundle-visualizer) to check the project bundle.

```bash
npx vite-bundle-visualizer
```
