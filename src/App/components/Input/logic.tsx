import { useState } from 'react';
import { IErr } from './interfaces';

const LogicInput = (defaultValue: number | string, type: string, getValue: (value: string) => void) => {
    const [focus, SetFocus] = useState<boolean>(false);
    const [value, SetValue] = useState<number | string>(defaultValue);
    const [err, SetErr] = useState<IErr>({ display: false, msg: '' });

    const onChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;

        if (type === 'email') {
            const { EmailAddress } = await import('./validateEmail');
            EmailAddress(newValue, SetErr, SetValue, getValue);
        } else if (type === 'phone') {
            const { Phone } = await import('./validatePhone');
            Phone(newValue, SetErr, SetValue, getValue);
        } else if (type === 'date') {
            const d = new Date(newValue);
            SetValue(newValue);
            getValue(d.toString());
        } else {
            SetValue(newValue);
            getValue(newValue);
        }
    };

    return { err, focus, value, onChangeInput, SetFocus };
};
export default LogicInput;
