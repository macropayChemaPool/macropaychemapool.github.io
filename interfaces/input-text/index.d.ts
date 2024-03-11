import { ReactNode } from "react";
import { Size } from "../common";
export type InputType = "normal" | "underline" | "underline bold";
export type HtmlType = "text" | "password" | "email" | "number";
export interface IInputText {
    type?: InputType;
    htmlType?: HtmlType;
    defaultValue?: string;
    size?: Size;
    name?: string;
    startIcon?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    className?: string;
    placeholder?: string;
    label?: string;
    clearOnFocus?: boolean;
    error?: string | ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLElement>) => void;
}
//# sourceMappingURL=index.d.ts.map