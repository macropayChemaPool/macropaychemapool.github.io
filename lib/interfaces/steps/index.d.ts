import { Key, ReactNode } from "react";
import { StepStatus } from "../common";
export interface IStep {
    key?: Key;
    icon: ReactNode;
    description: string;
}
export interface ISteps {
    steps: IContentStep[];
}
export interface IContentStep {
    id: string;
    name: string;
    href?: string;
    status: StepStatus;
}
//# sourceMappingURL=index.d.ts.map