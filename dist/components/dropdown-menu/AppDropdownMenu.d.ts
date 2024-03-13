declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    align?: "end" | "start" | "center" | undefined;
    hasArrow?: boolean | undefined;
    offset?: number | undefined;
    side?: "bottom" | "left" | "right" | "top" | undefined;
}>, {
    align: string;
    hasArrow: boolean;
    offset: number;
    side: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    align?: "end" | "start" | "center" | undefined;
    hasArrow?: boolean | undefined;
    offset?: number | undefined;
    side?: "bottom" | "left" | "right" | "top" | undefined;
}>, {
    align: string;
    hasArrow: boolean;
    offset: number;
    side: string;
}>>>, {
    side: "bottom" | "left" | "right" | "top";
    align: "end" | "start" | "center";
    hasArrow: boolean;
    offset: number;
}, {}>, {
    default?(_: {}): any;
    content?(_: {}): any;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
