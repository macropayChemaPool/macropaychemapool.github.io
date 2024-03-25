import { Key, ReactNode } from "react";
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
    status: "COMPLETE" | "CURRENT" | "PENDING" | "UPCOMING";
}
//# sourceMappingURL=index.d.ts.map