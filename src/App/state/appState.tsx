import { IAppState } from './interfaces';

export const appState: IAppState = {
    items: [],
    email: '',
    password: '',
    rememberMe: false,
    fetching: false,
    token: '',
    redirect: false,
    dialog: false,
};
