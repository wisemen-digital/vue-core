declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    isToggled: {
        required: true;
        type: import("vue").PropType<boolean>;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    isToggled: {
        required: true;
        type: import("vue").PropType<boolean>;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    isDisabled: boolean;
}, {}>, {
    default?(_: {
        isToggled: boolean;
        isDisabled: boolean;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
