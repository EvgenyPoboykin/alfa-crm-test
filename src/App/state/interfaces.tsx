export interface IProvider {
    children: React.ReactNode;
    value: any;
}

export interface IFormObject {
    email: string;
    password: string;
    rememberMe: boolean;
    fetching: boolean;
    token: string;
    redirect: boolean;
}

export interface ILoginOptionsData {
    email: string;
    password: string;
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

export interface IData {
    total: number;
    count: number;
    page: number;
    items: IItem[];
}

export interface IAppState {
    email: string;
    password: string;
    rememberMe: boolean;
    fetching: boolean;
    token: string;
    redirect: boolean;
    items: IItem[];
    dialog: boolean;
}
