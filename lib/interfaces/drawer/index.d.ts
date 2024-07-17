/// <reference types="react" />
type DrawerConfig = {
    onOk?: () => void;
    onCancel?: () => void;
    okText?: string;
    cancelText?: string;
};
export interface IDrawer {
    title?: string;
    isOpen: boolean;
    onClose: () => void;
    config?: DrawerConfig;
    children: React.ReactNode;
}
export {};
//# sourceMappingURL=index.d.ts.map