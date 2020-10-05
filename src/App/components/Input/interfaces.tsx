export interface IInput {
    placeholder: string;
    type?: string;
    getValue: (value: string) => void;
    defaultValue: any;
    visiblePlaceholder?: boolean;
}
export interface IContainer {
    focus: boolean;
}
export interface IInputField {
    type: string;
    visiblePlaceholder?: boolean;
}
export interface ISpan {
    focus: boolean;
    red: boolean;
}

export interface IErr {
    display: boolean;
    msg: string;
}
