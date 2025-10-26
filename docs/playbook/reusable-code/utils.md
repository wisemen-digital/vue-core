#### [Reusable Code](/playbook/reusable-code.md)

# Utils

Utils are reusable pieces of logic that are not specific to vue and never contain any state.
A good example is the `date.util.ts`.
Each function is pure and exported as a static function on a class and does not share any state with the other functions.

✅ Good example of a helper function

```typescript
import dayjs from "@/helpers/dayjs";

export class DateUtil {
    static formatShort(date: DateType | string): string {
        return dayjs(date).format("DD/MM/YYYY");
    }
}

```

❌ Bad example of a helper function

```typescript
export class DataBaseUtil {
    private database = new Database(); // This is not a pure function, it shares state with the database instance.

    static async saveToDatabase(data: any): Promise<void> {
        database.save(data)
    }
}
```
