export type FetchResponseGET<data, param> = {
    response: data | null;
    error: any;
    loading: boolean;
    fetcher: (arg: param, token?: string, isFormData?: boolean) => any;
};

export type FetchResponsePOST<data, param> = {
    response: data | null;
    error: any;
    loading: boolean;
    fetcher: (arg: param, token?: string, isForm?: boolean) => any;
};

export type AuthResponseType = {
    access_token: string;
    message: string;
};

export type CredentialsType = {
    email: string;
    password: string;
};

export type HomeType = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    email: string;
};

export type AboutType = {
    description: string;
    descriptionTitle: string;
    descriptionSubtitle: string;
    model: string;
};

export type CardType = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string;
    isHidden: boolean;
};
