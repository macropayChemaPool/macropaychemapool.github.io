import { ICommonProps, Size } from '../../interfaces/common';
import { ReactNode } from "react";
interface IAvatar extends ICommonProps {
    bgClassName?: string;
    colorClassName?: string;
    size?: Size;
    src?: string;
    icon?: ReactNode;
}
export declare const Avatar: ({ bgClassName, colorClassName, icon, size, src, className, onClick, style, }: IAvatar) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map