import type { ISwitchOptionProps } from "./switch-option";
export interface IConfigCardItem {
    id: string;
    title: string;
    options: Omit<ISwitchOptionProps, "onChange">[];
}
export interface IConfigCardProps {
    options: IConfigCardItem[];
    isLoading?: boolean;
    onChange?: (id: string, optionId: string, checked: boolean) => void;
}
//# sourceMappingURL=config-card.d.ts.map