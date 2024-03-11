import { Key, SVGProps, FC, ReactNode } from "react";
import { Direction, ICommonProps } from "../common";
export interface IBigButton extends ICommonProps {
    Icon: FC<SVGProps<SVGSVGElement>>;
    text: string;
    direction?: Direction;
    href?: string;
}
export type ColorType = "Green" | "Red" | "Purple" | "Aqua" | "Pink" | "Orange" | "Blue" | "Gray";
export interface ICardItem extends ICommonProps {
    idCardItem: Key;
    Logo: FC<SVGProps<SVGSVGElement>>;
    text: string;
    bgCard: ColorType;
    children?: IBigButton[];
    href?: string;
}
export interface IMenuContent {
    title?: string | ReactNode;
    itemsMenu: Omit<ICardItem, "onOpenMenu">[];
}
//# sourceMappingURL=index.d.ts.map