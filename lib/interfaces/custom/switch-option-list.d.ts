import type { ISwitchOptionProps } from "./switch-option";
export interface ISwitchOptionListProps {
    options: Omit<ISwitchOptionProps, "onChange">[];
    onChange?: ISwitchOptionProps["onChange"];
}
//# sourceMappingURL=switch-option-list.d.ts.map