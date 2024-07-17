import { ReactNode } from "react";
import { Direction, Generic, ICommonProps, TGapAllowed } from "../common";
export type JustifyContent = "start" | "center" | "end" | "between" | "around" | "evenly";
export type AlignItems = "start" | "center" | "end" | "baseline";
export interface IFlex extends Omit<ICommonProps, "onClick"> {
    children: ReactNode;
    justify?: Generic<JustifyContent>;
    align?: Generic<AlignItems>;
    gap?: Generic<TGapAllowed>;
    direction?: Direction;
    isReverse?: boolean;
    wrap?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export declare enum EPrefixFlex {
    justify = "justify",
    align = "items",
    gap = "gap"
}
//# sourceMappingURL=index.d.ts.map