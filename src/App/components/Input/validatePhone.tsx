import { IErr } from './interfaces';

const isPhone = (phone: any) => {
    const regex = /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
    const subst = '+7 ($2) $3-$4-$5';
    return phone.replace(regex, subst);
};

export const Phone = (value: string, _setErr: any, _setValue: any, _getValue: any) => {
    const newPhone = isPhone(value);

    if (newPhone.split(', ')) {
        const arrayPhones = newPhone.split(', ');
        _setValue(arrayPhones.join(', '));
        _getValue(arrayPhones.join(', '));
        _setErr((prev: IErr) => ({ ...prev, display: false, msg: '' }));
    } else {
        _setErr((prev: IErr) => ({ ...prev, display: true, msg: ' / номер телефона введен неправильно!' }));
    }
};
