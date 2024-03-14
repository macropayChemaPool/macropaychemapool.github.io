import { ReactNode } from "react";
import { Size } from "../common";
export type InputType = "normal" | "underline";
export type HtmlType = "text" | "password" | "email" | "number";
export interface IInputText {
    type?: InputType;
    htmlType?: HtmlType;
    defaultValue?: string;
    size?: Size;
    maxlength?: number;
    minlength?: number;
    name?: string;
    startIcon?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    className?: string;
    placeholder?: string;
    label?: string;
    fontBold?: boolean;
    clearOnFocus?: boolean;
    error?: string | ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLElement>) => void;
}
//# sourceMappingURL=index.d.ts.map