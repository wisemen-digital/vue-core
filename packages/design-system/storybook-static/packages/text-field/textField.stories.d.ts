import { StoryObj } from '@storybook/vue3-vite';
declare const meta: Meta<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue: string | null;
    } & import('./textField.props').TextFieldProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
    }>, {
        input: Readonly<import('vue').ShallowRef<HTMLInputElement | null>>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: string | null) => any;
    }, import('vue').PublicProps, {
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
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        input: HTMLInputElement;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue: string | null;
    } & import('./textField.props').TextFieldProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
    }>, {
        input: Readonly<import('vue').ShallowRef<HTMLInputElement | null>>;
    }, {}, {}, {}, {
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{
    modelValue: string | null;
} & import('./textField.props').TextFieldProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
}>, {
    input: Readonly<import('vue').ShallowRef<HTMLInputElement | null>>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | null) => any;
}, string, {
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
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        'label-left'?(_: {}): any;
        'label-right'?(_: {}): any;
        left?(_: {}): any;
        right?(_: {}): any;
    };
})>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithHint: Story;
export declare const Required: Story;
export declare const SizeSmall: Story;
export declare const SizeMedium: Story;
export declare const WithIcons: Story;
export declare const Disabled: Story;
export declare const Readonly: Story;
export declare const Loading: Story;
export declare const Error: Story;
export declare const ErrorHiddenMessage: Story;
export declare const AllStates: Story;
export declare const AllSizes: Story;
export declare const FormExample: Story;
