import { PropsWithChildren } from "react";
import { FooterProps } from "../footer";
import { IStoreInfo, NavbarProps } from "../navbar";
import { INavbarConfig } from "./navbar";
import { SidebarMenuItem } from "./sidebar";
import { IFooterProps } from "./footer";
export type LogoSources = {
    expanded: string;
    collapse?: string;
};
export type LogoConfig = string | LogoSources;
export interface ILayoutCommonProps {
    logo?: LogoConfig;
    navbarConfig?: INavbarConfig;
}
export interface LayoutProps extends PropsWithChildren {
    footerProps: FooterProps;
    navbarProps: NavbarProps;
    loading: boolean;
}
export interface ILayoutWithoutSidebarProps extends PropsWithChildren<ILayoutCommonProps> {
    store?: Omit<IStoreInfo, "className">;
    footer: IFooterProps;
    loading: boolean;
}
export interface ILayoutWithSidebarProps extends PropsWithChildren<ILayoutCommonProps> {
    sidebarItems: SidebarMenuItem[];
    title?: string;
    routerActive?: (routerLink?: string | string[]) => boolean;
}
export interface ILoginLayout {
    logo: string;
    title?: string;
    onClick?: () => void;
}
export * from "./navbar";
export * from "./sidebar";
//# sourceMappingURL=index.d.ts.map