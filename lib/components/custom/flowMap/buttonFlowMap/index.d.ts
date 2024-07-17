import { MouseEventHandler } from "react";
type TArrow = "⬅️" | "➡️";
interface IButtonFlowMap {
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    arrow: TArrow;
}
declare const ButtonFlowMap: ({ disabled, onClick, arrow }: IButtonFlowMap) => import("react/jsx-runtime").JSX.Element;
export default ButtonFlowMap;
//# sourceMappingURL=index.d.ts.map