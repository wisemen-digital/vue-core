#### [Reusable Code](/playbook/reusable-code.md)

# Queries

Queries are used to manage data requests (read) to the backend.

## Responsibility of a query

- Invoke the correct method from a service
- Handle loading state
- Handle caching and invalidation

## Examples

```typescript
// employeeIndex.query.ts
export function useEmployeeIndexQuery(
  paginationOptions: ComputedRef<PaginationOptions<EmployeeFilter>>,
  employeeTableStatus: Ref<EmployeeTableStatus>
): QueryPaginatedResult<EmployeeIndex> {
  return useQueryPaginatedResult<EmployeeIndex>({
    queryKey: [QueryKey.EMPLOYEES, employeeTableStatus, paginationOptions],
    keepPreviousData: true,
    queryFn: () => employeeService.getAll(paginationOptions.value),
  })
}
```

```typescript
// employeeDetail.query.ts
export function useEmployeeDetailQuery(employeeUuid: Ref<string>): QueryResult<Employee | null> {
  return useQueryResult({
    queryKey: [QueryKey.EMPLOYEE_DETAIL, employeeUuid],
    queryFn: () => employeeService.getByUuid(employeeUuid.value),
  })
}
```
