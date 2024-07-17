import { CarouselData } from "./instructions-carousel";
export interface IGuideModalProps {
    isOpen: boolean;
    qrCode?: string;
    instructions: CarouselData[];
    onClose?: () => void;
    onClick?: () => void;
}
export interface IQrCodeStepProps {
    value: string;
}
//# sourceMappingURL=guide-modal.d.ts.map