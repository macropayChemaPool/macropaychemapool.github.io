import { ReactNode } from "react";
export type ItemsAccordion = {
    key: string;
    header: ReactNode | string;
    children: JSX.Element;
};
export type ItemsAccordionCustom = {
    key: string;
    header: ReactNode | string;
    children?: JSX.Element;
};
export interface IAccordion {
    items?: Array<ItemsAccordion>;
    shadow?: boolean;
    showDivider?: boolean;
    bodyClassName?: string;
}
export interface IAccordionCustom {
    items?: Array<ItemsAccordionCustom>;
    shadow?: boolean;
    showDivider?: boolean;
    bodyClassName?: string;
}
interface AccordionEventTarget extends EventTarget {
    id: string;
    parentElement: {
        id: string;
    };
}
export interface AccordionEventTargetCustom extends React.MouseEvent<HTMLDivElement> {
    target: AccordionEventTarget;
}
export {};
//# sourceMappingURL=index.d.ts.map