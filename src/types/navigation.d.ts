interface NavigationItemOption {
    title: string;
    icon?: string;
}

declare interface NavigationItem {
    title: string;
    options?: NavigationItemOption[];
}

declare type NavigationType = NavigationItem[];

