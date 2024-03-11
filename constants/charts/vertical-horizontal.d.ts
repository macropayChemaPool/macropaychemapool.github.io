import { Direction } from '../../interfaces/common';
import { ChartOptions, ChartDataset, Plugin } from "chart.js";
import { AnyObject } from "chart.js/dist/types/basic";
export declare const borderRadius = 6;
export declare const commonBarChartOptions: ChartOptions<"bar">;
export declare const barChartTypes: Record<Direction, ChartOptions<"bar">["indexAxis"]>;
export declare const commonDatasetValue: ChartDataset<"bar", number[]>;
export declare const progressBar: Plugin<"bar", AnyObject>;
//# sourceMappingURL=vertical-horizontal.d.ts.map