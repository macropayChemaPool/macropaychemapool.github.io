import { Currency } from "dinero.js";
import { FC, SVGProps } from "react";
export type bg = "default" | "red";
export type typeCreditValue = "devices" | "loans" | "motorcycles" | "consoles";
export interface ICreditMessageProps {
    title: string;
    price: number;
    typeCredit: typeCreditValue;
    Icon: FC<SVGProps<SVGSVGElement>>;
    background: bg;
    currency: Currency | undefined;
}
export interface ITypeCreditVariants {
    typeText?: string;
    subtitleText?: string;
}
export interface ITypeColorsBg {
    colorText?: string;
    colorSubtitle?: string;
    bg?: string;
}
//# sourceMappingURL=index.d.ts.map