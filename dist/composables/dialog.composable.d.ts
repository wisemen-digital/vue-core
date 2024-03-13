import type { UseDialogContainerReturnType, UseDialogOptions, UseDialogReturnType } from '../types/dialog.type';
export declare function useDialogContainer(): UseDialogContainerReturnType;
export declare function useDialog<TComponent extends Record<string, unknown>>({ animateFromTrigger, component, }: UseDialogOptions<TComponent>): UseDialogReturnType<TComponent>;
