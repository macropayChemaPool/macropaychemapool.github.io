/// <reference types="react" />
export interface ISwitchOptionProps {
    id: string;
    label: string;
    icon?: React.ReactNode;
    tooltip?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (id: string, checked: boolean) => void;
}
//# sourceMappingURL=switch-option.d.ts.map