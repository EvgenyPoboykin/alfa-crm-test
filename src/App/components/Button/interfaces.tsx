export interface IButton {
    name: string;
    preloader?: React.ReactNode;
    color?: string;
    disable?: boolean;
    onClick?: () => void;
}
export interface IContainer {}
export interface IBtn {
    color?: string | undefined;
    disable?: boolean;
}

interface A {
    [key: string]: string;
}

export interface IColor extends A {
    green: string;
    red: string;
    blue: string;
}
