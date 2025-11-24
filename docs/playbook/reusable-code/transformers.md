#### [Reusable Code](/playbook/reusable-code.md)

# Transformers

Transformers are used to transform data from one format to another.
This can be useful when you want to transform data from the backend to a format that is more suitable for your frontend.

✅ Good example of a transformer function

```typescript
export function transformCustomerIndexDtoToCustomerIndex(customerIndexDto: CustomerIndexDto): CustomerIndex {
  return {
    uuid: customerIndexDto.uuid,
    name: customerIndexDto.name,
    email: customerIndexDto.email,
    phone: transformPhoneNumberDtoToPhoneNumber(customerIndexDto.phone),
    address: transformAddressDtoToAddress(customerIndexDto.address),
    createdAt: transformDateDtoToDate(customerIndexDto.createdAt),
    updatedAt: transformDateDtoToDate(customerIndexDto.updatedAt),
  }
}
```
