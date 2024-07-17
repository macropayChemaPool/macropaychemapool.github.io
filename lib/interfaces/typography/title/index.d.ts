import { FontWeight } from '../../../constants/typography/title';
import { ReactNode } from "react";
export type TitleType = 1 | 2 | 3 | 4;
export type TypeColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
export interface ITitle {
    children: ReactNode | string;
    level?: TitleType;
    color?: TypeColor;
    weight?: keyof typeof FontWeight;
    className?: string;
}
//# sourceMappingURL=index.d.ts.map