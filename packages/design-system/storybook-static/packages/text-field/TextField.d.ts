import { TextFieldProps } from './textField.props';
type __VLS_Props = TextFieldProps;
type __VLS_PublicProps = {
    modelValue: string | null;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'label-left'?(_: {}): any;
        'label-right'?(_: {}): any;
        left?(_: {}): any;
        right?(_: {}): any;
    };
    refs: {
        input: HTMLInputElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {
    input: Readonly<import('vue').ShallowRef<HTMLInputElement | null>>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
}>, {
    type: "email" | "password" | "search" | "tel" | "text" | "time" | "url";
    class: string | null;
    size: "md" | "sm";
    style: Record<string, string> | null;
    placeholder: string | null;
    id: string | null;
    isDisabled: boolean;
    isReadonly: boolean;
    isRequired: boolean;
    name: string | null;
    label: string | null;
    isLoading: boolean;
    iconLeft: import('vue').Component | null;
    iconRight: import('vue').Component | null;
    errorMessage: string | null;
    for: string | null;
    autocomplete: string;
    hint: string | null;
    hideErrorMessage: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    input: HTMLInputElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
