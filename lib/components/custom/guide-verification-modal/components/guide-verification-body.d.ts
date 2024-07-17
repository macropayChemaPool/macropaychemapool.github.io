/// <reference types="react" />
import { CarouselData } from '../../../../interfaces/custom/instructions-carousel';
interface IGuideVerificationBodyProps {
    instructions: CarouselData[];
    verificationCompletedImage: string;
    completed?: boolean;
    dynamicAlert?: boolean;
    required?: boolean;
}
declare const GuideVerificationBody: import("react").MemoExoticComponent<({ verificationCompletedImage, instructions, completed, dynamicAlert, required, }: IGuideVerificationBodyProps) => import("react/jsx-runtime").JSX.Element>;
export default GuideVerificationBody;
//# sourceMappingURL=guide-verification-body.d.ts.map