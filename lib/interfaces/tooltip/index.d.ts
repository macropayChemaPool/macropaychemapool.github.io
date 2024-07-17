import { ReactNode } from "react";
import { ICommonProps } from "../common";
export type Position = "top" | "right" | "bottom" | "left";
export type triggerTooltip = "hover" | "click";
export interface ITooltip extends ICommonProps {
    content?: string | JSX.Element;
    position?: Position;
    trigger?: triggerTooltip;
    arrowColor?: string;
    children: ReactNode;
}
//# sourceMappingURL=index.d.ts.map