import { Direction } from "../common";
interface IIndicatorLabel {
    label: string;
    color: string;
}
export interface IIndicatorChartProps {
    labels: IIndicatorLabel[];
}
interface ICommonChartProps {
    labels?: string[];
    values?: number[];
    tooltipLabel?: string;
}
export interface IDoughnutChartProps extends ICommonChartProps {
}
export interface IHorizontalChartProps extends ICommonChartProps {
}
export interface IBarChart {
    labels?: string[];
    values?: number[];
    tooltipLabel?: string;
    type: Direction;
}
export interface ICanvasPoints {
    x: number;
    y: number;
    w: number;
    h: number;
    radius: [number, number, number, number];
}
export {};
//# sourceMappingURL=index.d.ts.map