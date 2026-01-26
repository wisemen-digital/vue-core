import { Input, InputField, InputMeta } from '../types/input.type';
export declare function useInput(id: string, options: Input & InputMeta & InputField): {
    isError: import('vue').ComputedRef<boolean>;
    ariaBusy: import('vue').ComputedRef<"true" | undefined>;
    ariaDescribedBy: import('vue').ComputedRef<string | undefined>;
    ariaInvalid: import('vue').ComputedRef<"true" | undefined>;
    ariaRequired: import('vue').ComputedRef<"true" | undefined>;
};
