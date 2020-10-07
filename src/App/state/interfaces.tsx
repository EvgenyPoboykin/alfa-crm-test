export interface IProvider {
    children: React.ReactNode;
    value: any;
}

export interface IItem {
    name: string;
    dob: string;
    phone: any[];
    email: any[];
    addr: any[];
    branch_ids: any[];
    legal_type: number;
    is_study: number;
}

export interface IAppState {
    email: string;
    password: string;
    rememberMe: boolean;
    fetching: boolean;
    token: string;
    redirect: boolean;
    dialog: boolean;
    isAuth: boolean;
    currentPage: number;
}
