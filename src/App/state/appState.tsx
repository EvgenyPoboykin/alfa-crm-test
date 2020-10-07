import { IAppState } from './interfaces';

export const appState: IAppState = {
    email: '',
    password: '',
    rememberMe: false,
    fetching: false,
    token: '',
    redirect: false,
    dialog: false,
    isAuth: false,
    currentPage: 0,
};
