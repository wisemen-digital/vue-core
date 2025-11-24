#### [Reusable Code](/playbook/reusable-code.md)

# Pagination

//TODO

```typescript
interface Pagination<TFilter> {
  page: number
  perPage: number
  sort: 'asc' | 'desc'
  filter: {
    [key: keyof TFilter]: string | number | boolean | string[]
  }
}
```
