import { BarChartBgColor, GetTitleFunction } from '../../interfaces/charts';
import { BarChartColor, Direction, RadialGradient } from '../../interfaces/common';
import type { ChartOptions, ChartDataset, Plugin, ScriptableContext, GridLineOptions, BorderOptions } from "chart.js";
import { AnyObject } from "chart.js/dist/types/basic";
export declare const borderRadius = 6;
export declare const commonBarChartOptions: ChartOptions<"bar">;
export declare const barChartDirections: Record<Direction, ChartOptions<"bar">["indexAxis"]>;
export declare const commonDatasetValue: ChartDataset<"bar", number[]>;
export declare const barChartAppearances: Record<BarChartBgColor, RadialGradient | string>;
export declare const getScalesByDirection: (direction: Direction, textColor: BarChartColor, isActiveGrid: boolean) => {
    x: {
        grid: Partial<GridLineOptions>;
        backdropColor?: import("chart.js").Scriptable<import("chart.js").Color, import("chart.js").ScriptableScaleContext> | undefined;
        backdropPadding?: number | import("chart.js").ChartArea | undefined;
        callback?: ((this: import("chart.js").Scale<import("chart.js").CoreScaleOptions>, tickValue: string | number, index: number, ticks: import("chart.js").Tick[]) => string | number | string[] | number[] | null | undefined) | undefined;
        display?: boolean | undefined;
        color?: import("chart.js").ScriptableAndArray<import("chart.js").Color, import("chart.js").ScriptableScaleContext> | undefined;
        font?: import("chart.js").ScriptableAndScriptableOptions<Partial<import("chart.js").FontSpec>, import("chart.js").ScriptableScaleContext> | undefined;
        padding?: number | undefined;
        showLabelBackdrop?: import("chart.js").Scriptable<boolean, import("chart.js").ScriptableScaleContext> | undefined;
        textStrokeColor?: import("chart.js").Scriptable<import("chart.js").Color, import("chart.js").ScriptableScaleContext> | undefined;
        textStrokeWidth?: import("chart.js").Scriptable<number, import("chart.js").ScriptableScaleContext> | undefined;
        z?: number | undefined;
        major?: {
            enabled: boolean;
        } | undefined;
    };
    y: {
        grid: Partial<GridLineOptions>;
        beginAtZero: boolean;
    };
} | {
    x: {
        grid: Partial<GridLineOptions>;
        ticks: {
            backdropColor?: import("chart.js").Scriptable<import("chart.js").Color, import("chart.js").ScriptableScaleContext> | undefined;
            backdropPadding?: number | import("chart.js").ChartArea | undefined;
            callback?: ((this: import("chart.js").Scale<import("chart.js").CoreScaleOptions>, tickValue: string | number, index: number, ticks: import("chart.js").Tick[]) => string | number | string[] | number[] | null | undefined) | undefined;
            display?: boolean | undefined;
            color: import("chart.js").ScriptableAndArray<import("chart.js").Color, import("chart.js").ScriptableScaleContext>;
            font?: import("chart.js").ScriptableAndScriptableOptions<Partial<import("chart.js").FontSpec>, import("chart.js").ScriptableScaleContext> | undefined;
            padding?: number | undefined;
            showLabelBackdrop?: import("chart.js").Scriptable<boolean, import("chart.js").ScriptableScaleContext> | undefined;
            textStrokeColor?: import("chart.js").Scriptable<import("chart.js").Color, import("chart.js").ScriptableScaleContext> | undefined;
            textStrokeWidth?: import("chart.js").Scriptable<number, import("chart.js").ScriptableScaleContext> | undefined;
            z?: number | undefined;
            major?: {
                enabled: boolean;
            } | undefined;
        };
        border: {
            display: boolean;
            color: string;
        };
    };
    y: {
        grid: Partial<GridLineOptions>;
        border: Partial<BorderOptions>;
        ticks: {
            backdropColor?: import("chart.js").Scriptable<import("chart.js").Color, import("chart.js").ScriptableScaleContext> | undefined;
            backdropPadding?: number | import("chart.js").ChartArea | undefined;
            callback?: ((this: import("chart.js").Scale<import("chart.js").CoreScaleOptions>, tickValue: string | number, index: number, ticks: import("chart.js").Tick[]) => string | number | string[] | number[] | null | undefined) | undefined;
            display?: boolean | undefined;
            color: import("chart.js").ScriptableAndArray<import("chart.js").Color, import("chart.js").ScriptableScaleContext>;
            font?: import("chart.js").ScriptableAndScriptableOptions<Partial<import("chart.js").FontSpec>, import("chart.js").ScriptableScaleContext> | undefined;
            padding?: number | undefined;
            showLabelBackdrop?: import("chart.js").Scriptable<boolean, import("chart.js").ScriptableScaleContext> | undefined;
            textStrokeColor?: import("chart.js").Scriptable<import("chart.js").Color, import("chart.js").ScriptableScaleContext> | undefined;
            textStrokeWidth?: import("chart.js").Scriptable<number, import("chart.js").ScriptableScaleContext> | undefined;
            z?: number | undefined;
            major?: {
                enabled: boolean;
            } | undefined;
        };
    };
} | {
    x: {
        grid: Partial<GridLineOptions>;
        border: Partial<BorderOptions>;
        color: string;
        ticks: {
            backdropColor?: import("chart.js").Scriptable<import("chart.js").Color, import("chart.js").ScriptableScaleContext> | undefined;
            backdropPadding?: number | import("chart.js").ChartArea | undefined;
            callback?: ((this: import("chart.js").Scale<import("chart.js").CoreScaleOptions>, tickValue: string | number, index: number, ticks: import("chart.js").Tick[]) => string | number | string[] | number[] | null | undefined) | undefined;
            display?: boolean | undefined;
            color?: import("chart.js").ScriptableAndArray<import("chart.js").Color, import("chart.js").ScriptableScaleContext> | undefined;
            font?: import("chart.js").ScriptableAndScriptableOptions<Partial<import("chart.js").FontSpec>, import("chart.js").ScriptableScaleContext> | undefined;
            padding?: number | undefined;
            showLabelBackdrop?: import("chart.js").Scriptable<boolean, import("chart.js").ScriptableScaleContext> | undefined;
            textStrokeColor?: import("chart.js").Scriptable<import("chart.js").Color, import("chart.js").ScriptableScaleContext> | undefined;
            textStrokeWidth?: import("chart.js").Scriptable<number, import("chart.js").ScriptableScaleContext> | undefined;
            z?: number | undefined;
            major?: {
                enabled: boolean;
            } | undefined;
        };
    };
    y: {
        grid: Partial<GridLineOptions>;
        color: string;
        beginAtZero: boolean;
        ticks: {
            backdropColor?: import("chart.js").Scriptable<import("chart.js").Color, import("chart.js").ScriptableScaleContext> | undefined;
            backdropPadding?: number | import("chart.js").ChartArea | undefined;
            callback?: ((this: import("chart.js").Scale<import("chart.js").CoreScaleOptions>, tickValue: string | number, index: number, ticks: import("chart.js").Tick[]) => string | number | string[] | number[] | null | undefined) | undefined;
            display?: boolean | undefined;
            color?: import("chart.js").ScriptableAndArray<import("chart.js").Color, import("chart.js").ScriptableScaleContext> | undefined;
            font?: import("chart.js").ScriptableAndScriptableOptions<Partial<import("chart.js").FontSpec>, import("chart.js").ScriptableScaleContext> | undefined;
            padding?: number | undefined;
            showLabelBackdrop?: import("chart.js").Scriptable<boolean, import("chart.js").ScriptableScaleContext> | undefined;
            textStrokeColor?: import("chart.js").Scriptable<import("chart.js").Color, import("chart.js").ScriptableScaleContext> | undefined;
            textStrokeWidth?: import("chart.js").Scriptable<number, import("chart.js").ScriptableScaleContext> | undefined;
            z?: number | undefined;
            major?: {
                enabled: boolean;
            } | undefined;
        };
        border: {
            display: boolean;
            color: string;
        };
    };
};
export declare const createRadialGradient: (context: ScriptableContext<"bar">, bgColor: BarChartBgColor) => string | CanvasGradient | undefined;
export declare const getTitle: GetTitleFunction;
export declare const progressBar: Plugin<"bar", AnyObject>;
export declare const topBarChartLabel: Plugin<"bar", AnyObject>;
//# sourceMappingURL=vertical-horizontal.d.ts.map