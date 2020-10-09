import { IErr } from './interfaces';

const isEmailAddress = (str: string) => {
    const pattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    return pattern.test(str);
};

export const EmailAddress = (value: string, _setErr: any, _setValue: any, _getValue: any) => {
    if (isEmailAddress(value)) {
        _setValue(value);
        _getValue(value);
        _setErr((prev: IErr) => ({ ...prev, display: false, msg: '' }));
    } else {
        _setValue(value);
        _setErr((prev: IErr) => ({ ...prev, display: true, msg: ' / адрес электронной почты введен неправильно!' }));
    }
};
