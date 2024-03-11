import { Direction } from "../common";
export type DateSelectedTuple = [string, string];
export interface IDateRangePicker {
    disabled?: boolean;
    label?: string;
    layout?: Direction;
    onChange: (dateSelected: DateSelectedTuple) => void;
}
//# sourceMappingURL=index.d.ts.map