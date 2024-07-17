import type { ReactNode } from "react";
export interface IPaginationProps {
    currentPage?: number;
    total?: number;
    onChange?: (pageNumber: number, pageSize: number) => void;
}
interface IPageItemProps {
    pageNumber: number;
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
    element: ReactNode;
    isActive: boolean;
}
export type PageItemRender = (props: IPageItemProps) => ReactNode;
export {};
//# sourceMappingURL=index.d.ts.map