declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    isOpen: import("vue").PropType<boolean>;
    accessibleDescription: {
        type: import("vue").PropType<string>;
        required: true;
    };
    accessibleTitle: {
        type: import("vue").PropType<string>;
        required: true;
    };
    hideCloseButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    animateFromTrigger: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    triggerId: {
        type: import("vue").PropType<string | null>;
        default: null;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    isOpen: import("vue").PropType<boolean>;
    accessibleDescription: {
        type: import("vue").PropType<string>;
        required: true;
    };
    accessibleTitle: {
        type: import("vue").PropType<string>;
        required: true;
    };
    hideCloseButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    animateFromTrigger: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    triggerId: {
        type: import("vue").PropType<string | null>;
        default: null;
    };
}>>, {
    hideCloseButton: boolean;
    animateFromTrigger: boolean;
    triggerId: string | null;
}, {}>, {
    content?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
