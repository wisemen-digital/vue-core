declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The alignment of the tooltip content.
     * @default 'center'
     */
    align?: "end" | "start" | "center" | undefined;
    /**
     * The duration in milliseconds to wait before showing the tooltip.
     * @default 0
     */
    delayDuration?: number | undefined;
    /**
     * When true, clicking on trigger will not close the content.
     * @default false
     */
    disableCloseOnTriggerClick?: boolean | undefined;
    /**
     * When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
     * @default false
     */
    disableHoverableContent?: boolean | undefined;
    /**
     * When true, the arrow will be hidden.
     * @default false
     */
    hideArrow?: boolean | undefined;
    /**
     * The label to show in the tooltip.
     * @default null
     */
    label?: string | null | undefined;
    /**
     * The offset of the tooltip content.
     * @default 10
     */
    offset?: number | undefined;
    /**
     * The side of the trigger the tooltip should be on.
     * @default 'top'
     */
    side?: "bottom" | "left" | "right" | "top" | undefined;
}>, {
    align: string;
    delayDuration: number;
    disableCloseOnTriggerClick: boolean;
    disableHoverableContent: boolean;
    hideArrow: boolean;
    label: null;
    offset: number;
    side: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The alignment of the tooltip content.
     * @default 'center'
     */
    align?: "end" | "start" | "center" | undefined;
    /**
     * The duration in milliseconds to wait before showing the tooltip.
     * @default 0
     */
    delayDuration?: number | undefined;
    /**
     * When true, clicking on trigger will not close the content.
     * @default false
     */
    disableCloseOnTriggerClick?: boolean | undefined;
    /**
     * When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
     * @default false
     */
    disableHoverableContent?: boolean | undefined;
    /**
     * When true, the arrow will be hidden.
     * @default false
     */
    hideArrow?: boolean | undefined;
    /**
     * The label to show in the tooltip.
     * @default null
     */
    label?: string | null | undefined;
    /**
     * The offset of the tooltip content.
     * @default 10
     */
    offset?: number | undefined;
    /**
     * The side of the trigger the tooltip should be on.
     * @default 'top'
     */
    side?: "bottom" | "left" | "right" | "top" | undefined;
}>, {
    align: string;
    delayDuration: number;
    disableCloseOnTriggerClick: boolean;
    disableHoverableContent: boolean;
    hideArrow: boolean;
    label: null;
    offset: number;
    side: string;
}>>>, {
    label: string | null;
    side: "bottom" | "left" | "right" | "top";
    align: "end" | "start" | "center";
    offset: number;
    hideArrow: boolean;
    delayDuration: number;
    disableCloseOnTriggerClick: boolean;
    disableHoverableContent: boolean;
}, {}>, Readonly<{
    /**
     * (Optional) The content to show in the tooltip.
     */
    content: () => unknown;
    /**
     * (Required) The trigger element. But be a single, interactive element.
     */
    default: () => unknown;
}> & {
    /**
     * (Optional) The content to show in the tooltip.
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
