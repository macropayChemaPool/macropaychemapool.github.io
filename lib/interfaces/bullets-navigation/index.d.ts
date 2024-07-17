import { StepStatus } from "../common";
export interface IBulletNavigationStep {
    name: string;
    description?: string;
    status?: Exclude<StepStatus, "PENDING">;
}
export interface IBulletsNavigationProps {
    steps: IBulletNavigationStep[];
    className?: string;
}
//# sourceMappingURL=index.d.ts.map