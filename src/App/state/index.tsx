import { ContextApp, ProviderApp } from './Context';

export interface IFormObject {
    email: string;
    password: string;
    rememberMe: boolean;
}

const formObject: IFormObject = { email: '', password: '', rememberMe: false };

export { ContextApp, ProviderApp, formObject };
