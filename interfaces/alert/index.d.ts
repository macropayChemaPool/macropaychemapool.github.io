/// <reference types="react" />
export type Type = "success" | "info" | "warning" | "error";
export interface IAlert {
    message: string | React.ReactNode;
    showIcon?: boolean;
    title?: string;
    type?: Type;
}
//# sourceMappingURL=index.d.ts.map