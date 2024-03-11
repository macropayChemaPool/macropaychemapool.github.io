/// <reference types="react" />
import { ICommonProps, Size } from "../common";
export type Type = "primary" | "secondary" | "text" | "default" | "danger" | "empty";
export type IconPosition = "left" | "right";
export interface IColorVariants {
    bgColor?: string;
    color: string;
}
export interface IButton extends ICommonProps {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    type?: Type;
    size?: Size;
    isDisabled?: boolean;
    onClick?: () => void;
    iconPosition?: IconPosition;
    htmlType?: HTMLButtonElement["type"];
}
//# sourceMappingURL=index.d.ts.map