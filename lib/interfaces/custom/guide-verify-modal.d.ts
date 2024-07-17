import { IBulletNavigationStep } from "../bullets-navigation";
export interface IGuideVerifyModalProps {
    isOpen: boolean;
    isLoading?: boolean;
    dynamicAlert?: boolean;
    disabledOk?: boolean;
    closeLabel?: string;
    requiredMessage?: boolean;
    onClose?: () => void;
    onClick?: () => void;
    instructionsConfig: {
        /** Value to generate QR Code in Carrousel */
        stepOne: string;
        /** Image URL */
        stepTwo: string;
        /** Value to generate QR Code in Carrousel */
        stepThree: string;
        /** Image URL */
        verificationCompleted: string;
    };
    navigationSteps: IBulletNavigationStep[];
}
//# sourceMappingURL=guide-verify-modal.d.ts.map