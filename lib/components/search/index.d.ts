import { IButton } from '../../interfaces/button';
import { InputHTMLAttributes, ReactNode } from "react";
import { Size } from '../../interfaces/common';
import { InputType } from '../../interfaces/input-text';
interface ISearchButton extends Omit<IButton, "size" | "children" | "type"> {
    loading?: boolean;
    content?: string | ReactNode;
    icon?: ReactNode;
    buttonSize?: Size;
}
interface ISearch {
    label?: string;
    size?: Size;
    type?: InputType;
    disabled?: boolean;
    inputConfig: InputHTMLAttributes<HTMLInputElement>;
    buttonConfig: ISearchButton;
}
export declare const Search: ({ label, disabled, inputConfig, buttonConfig, size, type, }: ISearch) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map