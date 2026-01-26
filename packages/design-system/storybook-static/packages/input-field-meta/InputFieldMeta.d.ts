import { InputFieldMetaProps } from './inputFieldMeta.props';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'label-left'?(_: {}): any;
        'label-right'?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<InputFieldMetaProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<InputFieldMetaProps> & Readonly<{}>, {
    isDisabled: boolean;
    isRequired: boolean;
    label: string | null;
    errorMessage: string | null;
    for: string | null;
    hint: string | null;
    hideErrorMessage: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
