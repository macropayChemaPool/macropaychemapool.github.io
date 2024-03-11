import { ReactNode } from "react";
import { Size } from "../common";
interface InputNumberCommon {
    size?: Size;
    name?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    className?: string;
    placeholder?: string;
    label?: string;
    clearOnFocus?: boolean;
    error?: Record<string, string | ReactNode>;
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