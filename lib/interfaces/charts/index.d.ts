import { TitleOptions } from "chart.js";
import { BarChartColor, Direction } from "../common";
import { _DeepPartialObject } from "chart.js/dist/types/utils";
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
export type BarChartBgColor = "default" | "orange" | "teal" | "red" | "green" | "blue" | "purple";
export interface ITitleOptions {
    align: TitleOptions["align"];
    size: number;
    weight: number;
}
export interface IBarChart {
    title?: string;
    labels?: string[];
    values?: number[];
    tooltipLabel?: string;
    direction?: Direction;
    bgColor?: BarChartBgColor;
    showGrid?: boolean;
    titleOptions?: ITitleOptions;
    textColor: BarChartColor;
    className?: string;
    /**
     * Only work 👀 with `direction` is `vertical`
     */
    showTopLabel?: boolean;
}
export interface ICanvasPoints {
    x: number;
    y: number;
    w: number;
    h: number;
    radius: [number, number, number, number];
}
export type GetTitleFunction = (value: string, titleOptions: ITitleOptions & {
    textColor: BarChartColor;
}) => _DeepPartialObject<TitleOptions>;
export {};
//# sourceMappingURL=index.d.ts.map