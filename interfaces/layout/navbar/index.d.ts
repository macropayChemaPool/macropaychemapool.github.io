/// <reference types="react" />
import { Locale, MenuItem, NavbarTheme } from '../../navbar';
interface INavbarUserConfig {
    userImg?: string;
    userName?: string;
    role?: string;
}
export interface INavbarProps {
    userConfig?: INavbarUserConfig;
    title?: React.ReactNode;
    extra?: React.ReactNode;
    menuItems?: MenuItem[];
    locales?: Locale[];
}
export interface INavbarConfig {
    userName: string;
    role: string;
    userImg?: string;
    menuItems?: MenuItem[];
    locales?: Locale[];
}
export interface IStoreInfoProps {
    store?: number;
    cashRegister?: number;
    className?: string;
}
export interface ILanguageButtonProps {
    locales?: Locale[];
    className?: string;
    theme?: NavbarTheme;
}
export {};
//# sourceMappingURL=index.d.ts.map