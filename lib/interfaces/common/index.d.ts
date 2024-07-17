import { CSSProperties } from "react";
export type Size = "sm" | "md" | "lg" | "xl";
export type Direction = "vertical" | "horizontal";
export interface ICommonProps {
    className?: string;
    onClick?(): void;
    style?: CSSProperties;
}
export interface IResponsive<T> {
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
}
export type Generic<T> = T | [T, IResponsive<T>];
export type TGapAllowed = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type HeightSpacing = 12 | 16 | 44 | 48;
export type StepStatus = "COMPLETE" | "CURRENT" | "PENDING" | "UPCOMING";
export type RadialGradient = {
    start: `#${string}`;
    end: `#${string}`;
};
export type BarChartColor = "black" | "gray";
//# sourceMappingURL=index.d.ts.map