type __VLS_Props = {
    /**
     * The HTML element or component to render as the text container.
     * @default 'span'
     */
    as?: string;
    class?: string | null;
    /**
     * If `true`, the tooltip will be disabled even if the text is truncated.
     * @default false
     */
    disableTooltip?: boolean;
    /**
     * The text content to display.
     */
    text: string;
    /**
     * If `true`, the text will be truncated with an ellipsis if it overflows its container.
     * If a number between 1 and 6 is provided, the text will be clamped to that number of lines.
     */
    truncate?: boolean | 2 | 3 | 4 | 5 | 6;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    as: string;
    class: string | null;
    disableTooltip: boolean;
    truncate: boolean | 2 | 3 | 4 | 5 | 6;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    textRef: unknown;
}, any>;
export default _default;
