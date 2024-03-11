import { Key, ReactNode } from "react";
import { HeightSpacing, ICommonProps, Size } from "../common";
export type TOption = {
    value: Key;
    label: string;
    disabled?: boolean;
    extra?: ReactNode;
};
export interface ISelect extends ICommonProps {
    label?: string;
    options: TOption[];
    defaultValue?: TOption;
    placeholder?: string;
    size?: Size;
    type?: "normal" | "underline";
    error?: string | ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    listHeight?: HeightSpacing;
    onChange?(value: TOption): void;
}
//# sourceMappingURL=index.d.ts.map