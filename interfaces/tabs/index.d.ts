/// <reference types="react" />
type TypeTabs = "default" | "underline" | "with-icon" | "pills" | "segmented";
export interface ITabItem {
    key: string;
    label: React.ReactNode | string;
    href?: string;
    content?: React.ReactNode | string;
    disabled?: boolean;
}
export interface ITabsProps {
    defaultActiveKey?: string;
    type?: TypeTabs;
    items: ITabItem[];
    onChange?: (key: string) => void;
    className?: string;
    activeColorTabs?: string;
}
export {};
//# sourceMappingURL=index.d.ts.map