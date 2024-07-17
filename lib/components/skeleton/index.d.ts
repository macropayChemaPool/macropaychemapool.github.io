declare const components: {
    default: import("react/jsx-runtime").JSX.Element;
    avatar: import("react/jsx-runtime").JSX.Element;
    image: import("react/jsx-runtime").JSX.Element;
    "image-description": import("react/jsx-runtime").JSX.Element;
    list: import("react/jsx-runtime").JSX.Element;
};
interface ISkeleton {
    type: keyof typeof components;
}
export declare const Skeleton: ({ type }: ISkeleton) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map