#### [Reusable Code](/playbook/reusable-code.md)

# Models

Models are used to define the shape of data in your application.

```typescript
const customerIndexDtoSchema = z.object({
  uuid: customerUuidSchema,
  name: z.string(),
  email: z.string(),
  phone: phoneNumberDtoSchema,
  address: addressDtoSchema,
  createdAt: dateDtoSchema,
  updatedAt: dateDtoSchema,
});

export type CustomerIndexDto = z.infer<typeof customerIndexDtoSchema>;
```
