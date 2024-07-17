import React, { ReactNode } from "react";
type TPosition = "top" | "bottom" | "left" | "right";
type TTrigger = "hover" | "click";
interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
    position?: TPosition;
    classes?: {
        container?: string;
        children?: string;
        tooltip?: string;
    };
    showArrow?: boolean;
    trigger?: TTrigger;
    show?: boolean;
}
export declare const TooltipV2: React.FC<TooltipProps>;
export {};
//# sourceMappingURL=index.d.ts.map