import type { Icon } from '../../icons/icons';
import type { IconStyleProps } from '../icon/icon.style';
import type { ButtonStyleProps } from './button.style';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The icon to display
     */
    icon: Icon;
    /**
     * The size of the icon
     * @default sm
     */
    iconSize?: IconStyleProps['size'];
    /**
     *
     */
    label: string;
    /**
     * The variant of the button
     * @default default
     */
    variant?: ButtonStyleProps['variant'];
}>, {
    iconSize: string;
    variant: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The icon to display
     */
    icon: Icon;
    /**
     * The size of the icon
     * @default sm
     */
    iconSize?: IconStyleProps['size'];
    /**
     *
     */
    label: string;
    /**
     * The variant of the button
     * @default default
     */
    variant?: ButtonStyleProps['variant'];
}>, {
    iconSize: string;
    variant: string;
}>>>, {
    variant: "default" | "destructive" | "destructive-outline" | "ghost" | "outline" | "secondary";
    iconSize: "default" | "full" | "lg" | "sm" | "xl" | "xs" | "xxl";
}, {}>;
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
