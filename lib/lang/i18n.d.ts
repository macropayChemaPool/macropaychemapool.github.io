import { ResourceKey } from "i18next";
export declare const resources: {
    es: {
        translation: {
            guideVerificationModal: {
                title: string;
                message: string;
                instructions: string;
                buttonOk: string;
                buttonWaitOk: string;
                buttonCancel: string;
                steps: {
                    downloadApp: string;
                    enterApplication: string;
                    validateDevice: string;
                };
                userAlert: {
                    static: {
                        highlight: string;
                        tail: string;
                    };
                    dynamic: {
                        head: string;
                        highlight_zero: string;
                        highlight_one: string;
                    };
                };
                verificationCompleted: {
                    title: string;
                    description: string;
                };
            };
            guideModal: {
                title: string;
                steps: {
                    qrCode: string;
                    instructions: string;
                };
                qrCodeStep: string;
                buttons: {
                    ok: string;
                    cancel: string;
                };
            };
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
            errorPages: {
                title401: string;
                title403: string;
                title404: string;
                message401: string;
                message403: string;
                message404: string;
                goLogin: string;
                goMenu: string;
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
                step: string;
                changeCenter: string;
                closeSession: string;
                yesForward: string;
                blackList: {
                    title: string;
                    message: string;
                };
                messageChangeCenter: string;
                messageCloseSession: string;
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