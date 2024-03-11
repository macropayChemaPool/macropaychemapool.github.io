import { IButton } from '../../interfaces/button';
import { InputHTMLAttributes, ReactNode } from "react";
import { Size } from '../../interfaces/common';
interface ISearchButton extends Omit<IButton, "size" | "children"> {
    loading?: boolean;
    content?: string | ReactNode;
    icon?: ReactNode;
    buttonSize?: Size;
}
interface ISearch {
    label?: string;
    size?: Size;
    inputConfig: InputHTMLAttributes<HTMLInputElement>;
    buttonConfig: ISearchButton;
}
export declare const Search: ({ label, size, buttonConfig, inputConfig, }: ISearch) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map