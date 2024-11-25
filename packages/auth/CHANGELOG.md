## 1.0.0

### Major Changes

- Extracted logic that saves tokens to localStorage to a separate strategy
- Extracted logic that makes requests to the identity provider to a separate strategy
- Extracted logic that sets the authorization header to a separate strategy

- Created a new `FetchStrategy` interface that can be implemented to customize the way the client makes requests to the identity provider
- Created a new `TokensStrategy` interface that can be implemented to customize the way the client saves and retrieves tokens

- Created a new `useAxiosFetchStrategy` function that can be used to create a `FetchStrategy` that uses Axios
- Created a new `localStorageTokensStrategy` variable that can be used to create a `TokensStrategy` that uses localStorage

