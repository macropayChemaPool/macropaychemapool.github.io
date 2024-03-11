import { ICommonProps } from '../../interfaces/common';
import { ReactNode } from "react";
type TColorTag = "default" | "purple" | "geekblue" | "blue" | "cyan" | "green" | "lime" | "gold" | "orange" | "volcano" | "red" | "magenta";
interface ITag extends ICommonProps {
    color?: TColorTag;
    icon?: ReactNode;
    closable: boolean;
    tag: string;
    isShow?: boolean;
}
export declare const Tag: ({ closable, color, icon, tag, onClick, isShow, className, style, }: ITag) => false | import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map