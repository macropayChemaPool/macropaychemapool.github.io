import { FC, ReactNode, SVGProps } from "react";
export type NavbarProps = {
    avatar?: React.ReactNode;
    userName?: string;
    rol?: string;
    Logo: FC<SVGProps<SVGSVGElement>>;
    menuItems: MenuItem[];
    storeInfo?: IStoreInfo;
    langs?: Locale[];
};
export type MenuItem = {
    href?: string;
    label: string | ReactNode;
};
export type TBoxStore = {
    Icon: FC<SVGProps<SVGSVGElement>>;
    label: string;
    value: string;
    isBetween?: boolean;
};
export interface IStoreInfo {
    store?: string;
    cashRegister?: string;
    className?: string;
}
export type TLanguageItem = {
    Flag?: FC<SVGProps<SVGSVGElement>>;
    text?: string;
    className?: string;
    lang?: Locale;
};
export type TItemsOptions = Required<Omit<TLanguageItem, "className">>[];
export type TUserMenu = Omit<NavbarProps, "Logo">;
export type Locale = "es" | "en";
//# sourceMappingURL=index.d.ts.map