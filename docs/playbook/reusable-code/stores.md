#### [Reusable Code](/playbook/reusable-code.md)

# Stores

Stores are a way to manage the global state of your application.

Since the advent of libraries like TanStack query that manage server state and cache invalidation,
the need for a global state management library like Pinia has been reduced.

However, there are still some use cases where you might need a store.

## Responsibility of a store

- Managing global application state

## Example

This is an example of a well written store.

```typescript
// auth.store.ts
export const useAuthStore = defineStore('auth', () => {
  const { $oAuthClient } = useNuxtApp()
  const currentUser = ref<User | null>(null)

  const authService = new AuthService()

  const isAuthenticated = computed<boolean>(() => {
    return currentUser.value === null
  })

  function setCurrentUser(user: User | null): void {
    currentUser.value = user
  }

  async function getUser(): Promise<User> {
    if (currentUser.value !== null) {
      return currentUser.value
    }

    const user = await authService.getCurrentUser()
    setCurrentUser(user)

    return currentUser.value!
  }

  async function login({ username, password }: { username: string; password: string }): Promise<void> {
    await $oAuthClient.login(username, password)
  }

  function logout(): void {
    $oAuthClient.logout()
    setCurrentUser(null)
  }

  return {
    currentUser,
    isAuthenticated,
    getCurrentUser: getUser,
    setCurrentUser,
    login,
    logout,
  }
})
```
