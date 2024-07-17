import { PropsWithChildren } from "react";
import { IButton } from "../button";
export type ModalType = "default" | "success" | "error" | "warning" | "info";
export type ModalTitleAlign = "center" | "right" | "left";
export type DrawerPosition = "left" | "right" | "top" | "bottom";
export interface DialogProps extends PropsWithChildren {
    isOpen: boolean;
    buttonOk?: IButton;
    buttonCancel?: IButton;
    title?: React.ReactNode | string;
    onClose?: () => void;
    slideOver?: DrawerPosition;
    sizeHeightCustom?: string;
    isCloseAble?: boolean;
}
export interface IModalProps extends DialogProps {
    header?: React.ReactNode;
    message?: string;
    type?: ModalType;
    titleAlign?: ModalTitleAlign;
    className?: string;
}
//# sourceMappingURL=index.d.ts.map