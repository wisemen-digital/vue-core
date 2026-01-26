import { InputFieldProps } from './inputField.props';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        left?(_: {}): any;
        default?(_: {}): any;
        right?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<InputFieldProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<InputFieldProps> & Readonly<{}>, {
    size: "md" | "sm";
    placeholder: string | null;
    isDisabled: boolean;
    isReadonly: boolean;
    isError: boolean;
    isLoading: boolean;
    iconLeft: import('vue').Component | null;
    iconRight: import('vue').Component | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
