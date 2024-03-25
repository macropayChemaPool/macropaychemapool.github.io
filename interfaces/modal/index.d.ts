import { PropsWithChildren } from "react";
import { IButton } from "../button";
import { ITitle } from "../typography/title";
export type ModalType = "default" | "success" | "error" | "warning" | "info";
export type ModalTitleAlign = "center" | "right";
export interface DialogProps extends PropsWithChildren {
    isOpen: boolean;
    buttonOk?: IButton;
    buttonCancel?: IButton;
    title?: string | ITitle;
    onClose?: () => void;
}
export interface ModalProps extends DialogProps {
    type?: ModalType;
    titleAlign?: ModalTitleAlign;
    className?: string;
}
export interface IModalProps extends DialogProps {
    header?: React.ReactNode;
    message?: string;
    type?: ModalType;
    titleAlign?: ModalTitleAlign;
    className?: string;
}
//# sourceMappingURL=index.d.ts.map