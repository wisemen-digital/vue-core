import type { RouteRecordRaw } from 'vue-router';
export interface Routes {
}
export interface RouteLocationTyped<TRoute extends keyof Routes> {
    name: TRoute;
}
export type RouteRecordTyped = {
    children?: RouteRecordTyped[];
    name: keyof Routes;
    path: string;
    redirect?: RouteRecordRaw['redirect'] & {
        name: keyof Routes;
    };
} | (Omit<RouteRecordRaw, 'children' | 'name'> & {
    children: RouteRecordTyped[];
});
