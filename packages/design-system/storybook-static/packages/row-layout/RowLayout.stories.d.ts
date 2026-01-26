import { StoryObj } from '@storybook/vue3-vite';
declare const meta: Meta<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        align?: "center" | "end" | "start";
        as?: string;
        gap?: "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | "10xl" | "11xl" | "lg" | "md" | "none" | "sm" | "xl" | "xs" | "xxs";
        justify?: "between" | "center" | "end" | "start";
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        align: "center" | "end" | "start";
        as: string;
        gap: "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | "10xl" | "11xl" | "lg" | "md" | "none" | "sm" | "xl" | "xs" | "xxs";
        justify: "between" | "center" | "end" | "start";
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        align?: "center" | "end" | "start";
        as?: string;
        gap?: "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | "10xl" | "11xl" | "lg" | "md" | "none" | "sm" | "xl" | "xs" | "xxs";
        justify?: "between" | "center" | "end" | "start";
    }> & Readonly<{}>, {}, {}, {}, {}, {
        align: "center" | "end" | "start";
        as: string;
        gap: "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | "10xl" | "11xl" | "lg" | "md" | "none" | "sm" | "xl" | "xs" | "xxs";
        justify: "between" | "center" | "end" | "start";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{
    align?: "center" | "end" | "start";
    as?: string;
    gap?: "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | "10xl" | "11xl" | "lg" | "md" | "none" | "sm" | "xl" | "xs" | "xxs";
    justify?: "between" | "center" | "end" | "start";
}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    align: "center" | "end" | "start";
    as: string;
    gap: "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | "10xl" | "11xl" | "lg" | "md" | "none" | "sm" | "xl" | "xs" | "xxs";
    justify: "between" | "center" | "end" | "start";
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithLargeGap: Story;
export declare const CenterJustified: Story;
export declare const SpaceBetween: Story;
export declare const AlignEnd: Story;
