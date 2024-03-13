import type { DataItem } from '../../types/dataItem.type';
import type { FormFieldErrors } from '../../types/formFieldErrors.type';
declare const _default: <T extends string>(__VLS_props: {
    label: string;
    onBlur?: (() => any) | undefined;
    modelValue: T | null;
    options: DataItem<T>[];
    placeholder?: string | null | undefined;
    isRequired?: boolean | undefined;
    errors: FormFieldErrors;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: {};
    emit: (evt: "blur") => void;
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        label: string;
        onBlur?: (() => any) | undefined;
        modelValue: T | null;
        options: DataItem<T>[];
        placeholder?: string | null | undefined;
        isRequired?: boolean | undefined;
        errors: FormFieldErrors;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: (evt: "blur") => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            label: string;
            onBlur?: (() => any) | undefined;
            modelValue: T | null;
            options: DataItem<T>[];
            placeholder?: string | null | undefined;
            isRequired?: boolean | undefined;
            errors: FormFieldErrors;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {};
        emit: (evt: "blur") => void;
    } | undefined;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
