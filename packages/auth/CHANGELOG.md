## 1.1.0

## 3.0.0

### Major Changes

- 4eabb7f: replace ZitadelClient with OidcClient
  - rename ZitadelClient to OidcClient
  - scoped are now required; default scopes removed
  - remove organizationId

## 2.2.0

### Minor Changes

- 38fda81: Add `setConfig` method to zitadel client

## 2.1.0

### Minor Changes

- 7214bf6: add support for redirectUrl

### Major Changes

- Extracted logic that saves tokens to localStorage to a separate strategy
- Extracted logic that makes requests to the identity provider to a separate strategy
- Extracted logic that sets the authorization header to a separate strategy

- Created a new `FetchStrategy` interface that can be implemented to customize the way the client makes requests to the identity provider
- Created a new `TokensStrategy` interface that can be implemented to customize the way the client saves and retrieves tokens

- Created a new `new AxiosFetchStrategy(axiosInstance)` function that can be used to create a `FetchStrategy` that uses axios
- Created a new `new LocalStorageTokensStrategy()` function that can be used to create a `TokensStrategy` that uses localStorage
