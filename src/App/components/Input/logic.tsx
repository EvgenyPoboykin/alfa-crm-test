import { useState } from 'react';
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
        } else if (type === 'date') {
            const d = new Date(newValue);
            // const mm = d.getMonth() + 1;
            // const dd = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
            // const yy = d.getFullYear();
            // const dob = `${dd}-${mm}-${yy}`;
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
