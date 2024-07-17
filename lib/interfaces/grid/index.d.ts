import { ReactNode } from "react";
import { Generic, TGapAllowed } from "../common";
export type TNumberAllowed = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare enum EPrefixGrid {
    cols = "grid-cols",
    rows = "grid-rows",
    gap = "gap",
    justifyItems = "justify-items",
    alignContent = "content",
    span = "col-span",
    start = "col-start",
    end = "col-end",
    justifySelf = "justify-self",
    alignSelf = "self"
}
export type TJustifyItems = "start" | "center" | "end" | "stretch" | "none";
export type TAlignContent = "center" | "start" | "end" | "between" | "around" | "evenly";
export type TJustifySelf = "auto" | "start" | "end" | "center" | "stretch";
export type TAlignSelf = "auto" | "start" | "end" | "center" | "stretch" | "baseline";
export interface IRow {
    children?: ReactNode;
    cols?: Generic<TNumberAllowed | "none">;
    gap?: Generic<TGapAllowed>;
    justify?: Generic<TJustifyItems>;
    align?: Generic<TAlignContent | "none">;
    className?: string;
}
export interface ICol {
    children?: ReactNode;
    span?: Generic<TNumberAllowed | "auto" | "full">;
    start?: Generic<TNumberAllowed | 13 | "auto">;
    end?: Generic<TNumberAllowed | 13 | "auto">;
    justify?: Generic<TJustifySelf>;
    align?: Generic<TAlignSelf>;
    className?: string;
}
//# sourceMappingURL=index.d.ts.map