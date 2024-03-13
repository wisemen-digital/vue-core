declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The alignment of the popover content.
     * @default 'center'
     */
    align?: "end" | "start" | "center" | undefined;
    /**
     * When true, the arrow will be hidden.
     * @default false
     */
    hideArrow?: boolean | undefined;
    /**
     * The offset of the popover content.
     * @default 10
     */
    offset?: number | undefined;
    /**
     * The side of the trigger the popover should be on.
     * @default 'top'
     */
    side?: "bottom" | "left" | "right" | "top" | undefined;
}>, {
    align: string;
    hideArrow: boolean;
    offset: number;
    side: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The alignment of the popover content.
     * @default 'center'
     */
    align?: "end" | "start" | "center" | undefined;
    /**
     * When true, the arrow will be hidden.
     * @default false
     */
    hideArrow?: boolean | undefined;
    /**
     * The offset of the popover content.
     * @default 10
     */
    offset?: number | undefined;
    /**
     * The side of the trigger the popover should be on.
     * @default 'top'
     */
    side?: "bottom" | "left" | "right" | "top" | undefined;
}>, {
    align: string;
    hideArrow: boolean;
    offset: number;
    side: string;
}>>>, {
    side: "bottom" | "left" | "right" | "top";
    align: "end" | "start" | "center";
    offset: number;
    hideArrow: boolean;
}, {}>, Readonly<{
    /**
     * (Required) The content to show in the tooltip.
     */
    content: () => unknown;
    /**
     * (Required) The trigger element. But be a single, interactive element.
     */
    default: () => unknown;
}> & {
    /**
     * (Required) The content to show in the tooltip.
     */
    content: () => unknown;
    /**
     * (Required) The trigger element. But be a single, interactive element.
     */
    default: () => unknown;
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
