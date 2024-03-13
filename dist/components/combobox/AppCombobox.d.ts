import type { DataItem } from '../../types/dataItem.type';
declare const _default: <T extends string>(__VLS_props: {
    "onUpdate:modelValue"?: ((value: T | T[] | null) => any) | undefined;
    emptyText?: string | null | undefined;
    isInvalid?: boolean | undefined;
    modelValue: T | T[] | null;
    options: DataItem<T>[];
    placeholder?: string | null | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: {};
    emit: (evt: "update:modelValue", value: T | T[] | null) => void;
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        "onUpdate:modelValue"?: ((value: T | T[] | null) => any) | undefined;
        emptyText?: string | null | undefined;
        isInvalid?: boolean | undefined;
        modelValue: T | T[] | null;
        options: DataItem<T>[];
        placeholder?: string | null | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: (evt: "update:modelValue", value: T | T[] | null) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            "onUpdate:modelValue"?: ((value: T | T[] | null) => any) | undefined;
            emptyText?: string | null | undefined;
            isInvalid?: boolean | undefined;
            modelValue: T | T[] | null;
            options: DataItem<T>[];
            placeholder?: string | null | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {};
        emit: (evt: "update:modelValue", value: T | T[] | null) => void;
    } | undefined;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
