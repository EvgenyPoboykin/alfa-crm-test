export interface IInput {
    placeholder: string;
    type?: string;
    getValue: (value: string) => void;
    defaultValue: any;
}
export interface IContainer {
    focus: boolean;
}
export interface IInputField {
    type: string;
}
export interface ISpan {
    focus: boolean;
}
