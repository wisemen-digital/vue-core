import type { FormFieldErrors } from '../../types/formFieldErrors.type';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    /**
     * The errors associated with the input.
     */
    errors: FormFieldErrors;
    /**
     *  Whether the input is required.
     */
    isRequired?: boolean | undefined;
    /**
     * Whether the input is touched. This is used to determine if the input should be marked as invalid.
     */
    isTouched: boolean;
    /**
     * The label of the input.
     */
    label: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    /**
     * The errors associated with the input.
     */
    errors: FormFieldErrors;
    /**
     *  Whether the input is required.
     */
    isRequired?: boolean | undefined;
    /**
     * Whether the input is touched. This is used to determine if the input should be marked as invalid.
     */
    isTouched: boolean;
    /**
     * The label of the input.
     */
    label: string;
}>>>, {}, {}>, {
    default?(_: {
        isInvalid: boolean;
    }): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
