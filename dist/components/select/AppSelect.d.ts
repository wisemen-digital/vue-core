import type { DataItem } from '../../types/dataItem.type';
declare const _default: <T extends string>(__VLS_props: {
    onBlur?: (() => any) | undefined;
    id?: string | null | undefined;
    "onUpdate:modelValue"?: ((value: T | null) => any) | undefined;
    isInvalid?: boolean | undefined;
    modelValue: T | null;
    options: DataItem<T>[];
    placeholder?: string | null | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: {};
    emit: ((evt: "blur") => void) & ((evt: "update:modelValue", value: T | null) => void);
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        onBlur?: (() => any) | undefined;
        id?: string | null | undefined;
        "onUpdate:modelValue"?: ((value: T | null) => any) | undefined;
        isInvalid?: boolean | undefined;
        modelValue: T | null;
        options: DataItem<T>[];
        placeholder?: string | null | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: ((evt: "blur") => void) & ((evt: "update:modelValue", value: T | null) => void);
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            onBlur?: (() => any) | undefined;
            id?: string | null | undefined;
            "onUpdate:modelValue"?: ((value: T | null) => any) | undefined;
            isInvalid?: boolean | undefined;
            modelValue: T | null;
            options: DataItem<T>[];
            placeholder?: string | null | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {};
        emit: ((evt: "blur") => void) & ((evt: "update:modelValue", value: T | null) => void);
    } | undefined;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
