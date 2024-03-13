import type { Component } from 'vue';
export interface BaseIcons {
    arrowDown: Promise<Component>;
    arrowLeft: Promise<Component>;
    arrowRight: Promise<Component>;
    arrowUp: Promise<Component>;
    checkmark: Promise<Component>;
    chevronDown: Promise<Component>;
    chevronLeft: Promise<Component>;
    chevronRight: Promise<Component>;
    chevronUp: Promise<Component>;
    close: Promise<Component>;
    eye: Promise<Component>;
    eyeSlash: Promise<Component>;
}
export interface Icons {
}
export type AllIcons = BaseIcons & Icons;
export declare const icons: AllIcons;
export declare function extendIcons(customIcons: Icons): void;
export type Icon = keyof AllIcons;
