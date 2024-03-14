import { ResourceKey } from "i18next";
export declare const resources: {
    es: {
        translation: {
            customerNameCard: {
                label: string;
                unknown: string;
            };
            layout: {
                login: {
                    btnLabel: string;
                };
            };
            header: {
                signOut: string;
                store: string;
                cashRegister: string;
                roleName: string;
                sessionExp: string;
                continueSessionPrefix: string;
                continueSessionSuffix: string;
            };
            common: {
                yes: string;
                accept: string;
                no: string;
                cancel: string;
                send: string;
                save: string;
                name: string;
                names: string;
                lastName: string;
                secondName: string;
                street: string;
                extNumber: string;
                colony: string;
                CP: string;
                upload: string;
                goBack: string;
                goForward: string;
                goToLoginButton: string;
                search: string;
                htmlTitle: string;
                themedark: string;
                goToMenu: string;
                closeMenu: string;
            };
        };
    };
    en: {
        translation: {
            customerNameCard: {
                label: string;
                unknown: string;
            };
            header: {
                signOut: string;
                store: string;
                cashRegister: string;
                roleName: string;
                sessionExp: string;
                continueSessionPrefix: string;
                continueSessionSuffix: string;
            };
            common: {
                yes: string;
                accept: string;
                no: string;
                cancel: string;
                send: string;
                save: string;
                name: string;
                names: string;
                lastName: string;
                secondName: string;
                street: string;
                extNumber: string;
                colony: string;
                CP: string;
                upload: string;
                goBack: string;
                goForward: string;
                goToLoginButton: string;
                search: string;
                htmlTitle: string;
                themedark: string;
                goToMenu: string;
                closeMenu: string;
            };
        };
    };
};
interface ITranslation {
    translation: {
        [namespace: string]: ResourceKey;
    };
}
interface IResources {
    es: ITranslation;
    en: ITranslation;
}
export declare const getConfigI18n: (params: IResources) => import("i18next").i18n;
export {};
//# sourceMappingURL=i18n.d.ts.map