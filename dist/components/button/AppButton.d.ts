import type { Icon } from '../../icons/icons';
import type { ButtonStyleProps } from './button.style';
export interface AppButtonProps {
    /**
     * The icon to display on the left side of the button.
     * @default null
     */
    iconLeft?: Icon | null;
    /**
     * The icon to display on the right side of the button.
     * @default null
     */
    iconRight?: Icon | null;
    /**
     * Whether the button is disabled.
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Whether the button is in a loading state.
     * @default false
     */
    isLoading?: boolean;
    /**
     * The size of the button.
     * @default 'default'
     */
    size?: ButtonStyleProps['size'];
    /**
     * The type of the button.
     * @default 'button'
     */
    type?: 'button' | 'reset' | 'submit';
    /**
     * The variant of the button.
     * @default 'default'
     */
    variant?: ButtonStyleProps['variant'];
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AppButtonProps>, {
    isDisabled: boolean;
    isLoading: boolean;
    size: string;
    type: string;
    variant: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AppButtonProps>, {
    isDisabled: boolean;
    isLoading: boolean;
    size: string;
    type: string;
    variant: string;
}>>>, {
    size: "default" | "lg" | "sm" | "icon";
    type: "button" | "reset" | "submit";
    variant: "default" | "destructive" | "destructive-outline" | "ghost" | "outline" | "secondary";
    isDisabled: boolean;
    isLoading: boolean;
}, {}>, {
    default?(_: {}): any;
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
