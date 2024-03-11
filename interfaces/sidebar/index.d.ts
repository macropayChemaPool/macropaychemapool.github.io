import { Key, ReactNode } from "react";
export interface ISidebar {
    logo?: ReactNode;
    menuItems: IMenuItem[];
    children: ReactNode;
}
export interface IMenuItem {
    label: ReactNode;
    key: Key;
    icon?: ReactNode;
    children?: IMenuItem[];
}
//# sourceMappingURL=index.d.ts.map