import { Key, SVGProps, FC, ReactNode } from "react";
import { Direction, ICommonProps } from "../common";
export interface IBigButton extends ICommonProps {
    Icon: FC<SVGProps<SVGSVGElement>>;
    text: string;
    direction?: Direction;
    href?: string;
}
export type ColorType = "Green" | "Red" | "Purple" | "Aqua" | "Pink" | "Orange" | "Blue" | "Gray" | "Black";
export interface ICardItem extends Omit<ICommonProps, "onClick"> {
    idCardItem: Key;
    logoCard: ReactNode;
    logoMenu?: ReactNode;
    text: string;
    bgCard: ColorType;
    children?: IBigButton[];
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export interface IMenuContent {
    title?: string | ReactNode;
    itemsMenu: Omit<ICardItem, "onOpenMenu">[];
}
//# sourceMappingURL=index.d.ts.map