import { Key, ReactNode } from "react";
import { ICommonProps, Size } from "../common";
export type TOption = {
    value: Key;
    label: string;
    extra?: ReactNode;
};
export interface ISelect extends ICommonProps {
    label?: string;
    options: TOption[];
    defaultValue?: TOption;
    placeholder?: string;
    size?: Size;
    type?: "normal" | "underline";
    error?: Record<string, string | ReactNode>;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
}
//# sourceMappingURL=index.d.ts.map