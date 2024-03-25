import { ReactNode } from "react";
import { Size } from "../common";
interface InputNumberCommon {
    size?: Size;
    name?: string;
    disabled?: boolean;
    defaultValue?: number;
    readOnly?: boolean;
    required?: boolean;
    className?: string;
    placeholder?: string;
    label?: string;
    clearOnFocus?: boolean;
    error?: string | ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLElement>) => void;
}
export interface InputNumberInterface extends InputNumberCommon {
    icon?: ReactNode;
}
export interface InputNumberCurrencyInterface extends InputNumberCommon {
    currency?: string | ReactNode;
    symbolCurrency?: string | ReactNode;
}
export {};
//# sourceMappingURL=index.d.ts.map