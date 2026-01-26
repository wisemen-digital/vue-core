import { Component } from 'vue';
import { RouteLocationRaw } from 'vue-router';
export interface DashboardSidebarNavLink {
    /**
     * Icon component to display alongside the label
     */
    icon: Component;
    /**
     * Text label for the navigation link
     */
    label: string;
    /**
     * Route location to navigate to
     */
    to: RouteLocationRaw;
}
export interface DashboardSidebarGroup {
    /**
     * Optional label for the group
     */
    label?: string;
    /**
     * Links within the group
     */
    links: DashboardSidebarNavLink[];
}
