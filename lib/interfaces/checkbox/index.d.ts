import { ICommonProps } from "../common";
export interface ICheckboxProps extends Omit<ICommonProps, "onClick" | "style"> {
    label?: string;
    defaultChecked?: boolean;
    isDisabled?: boolean;
    indeterminate?: boolean;
    checked?: boolean;
    onChange?: (isChecked: boolean) => void;
}
//# sourceMappingURL=index.d.ts.map