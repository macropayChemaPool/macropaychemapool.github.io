/// <reference types="react" />
export type TableData = {
    id?: string | number;
    [key: string]: any;
};
export interface ITableColumn<T> {
    key: string;
    label: string;
    render?: (value: T) => React.ReactNode;
}
export interface ITable<TData extends TableData> {
    data: TData[];
    showIdRow?: boolean;
    isLoading: boolean;
    columnColor?: string[];
    columns: ITableColumn<TData>[];
    handleSort?: () => void;
    onChange?: (selectedRows: TData[]) => void;
}
//# sourceMappingURL=index.d.ts.map