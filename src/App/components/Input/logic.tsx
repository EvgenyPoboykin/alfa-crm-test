import { useState, useEffect } from 'react';
import { IErr } from './interfaces';
import { EmailAddress, Phone } from './validate';

const LogicInput = (defaultValue: number | string, type: string, getValue: (value: string) => void) => {
    const [focus, SetFocus] = useState<boolean>(false);
    const [value, SetValue] = useState<number | string>(defaultValue);
    const [err, SetErr] = useState<IErr>({ display: false, msg: '' });

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;

        if (type === 'email') {
            EmailAddress(newValue, SetErr, SetValue, getValue);
        } else if (type === 'phone') {
            Phone(newValue, SetErr, SetValue, getValue);
        } else {
            SetValue(newValue);
            getValue(newValue);
        }
    };

    useEffect(() => {
        if (type === 'date' && defaultValue === '') {
            const d = new Date();
            const mm = d.getMonth() + 1;
            const dd = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
            const yy = d.getFullYear();
            SetValue(`${yy}-${mm}-${dd}`);
        }
    }, [value, defaultValue, type]);

    return { err, focus, value, onChangeInput, SetFocus };
};
export default LogicInput;
