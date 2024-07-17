import { ReactNode } from "react";
import { StepStatus } from "../common";
export interface ICarouselItem {
    id: string;
    image?: string;
    qrCode?: string;
    description?: string;
    qrColor?: string;
}
export type CarouselData = Omit<ICarouselItem, "index">;
export interface ICarouselStepProps {
    position: number;
    name: string;
    status?: StepStatus;
}
export interface ICarouselStepsProps {
    current: number;
    steps: Omit<ICarouselStepProps, "status">[];
}
export interface ISlideAnimationProps {
    className?: string;
    slideId?: string;
    children?: ReactNode;
}
export interface ISlidesProps {
    current: number;
    items: CarouselData[];
    steps: React.ReactNode;
}
export interface IInstructionsCarouselProps {
    items: CarouselData[];
    className?: string;
}
//# sourceMappingURL=instructions-carousel.d.ts.map