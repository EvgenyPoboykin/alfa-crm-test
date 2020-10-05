import React, { lazy, useState, useEffect } from 'react';
import { IInput, IErr } from './interfaces';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Span = lazy(() => import('./style').then((mod) => ({ default: mod.Span })));
const InputField = lazy(() => import('./style').then((mod) => ({ default: mod.InputField })));

const Input: React.FC<IInput> = ({ getValue, defaultValue, placeholder, type = 'text', visiblePlaceholder = true }) => {
    const [focus, SetFocus] = useState<boolean>(false);
    const [value, SetValue] = useState<string>(defaultValue);
    const [err, SetErr] = useState<IErr>({ display: false, msg: '' });

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;

        if (type === 'email') {
            import('./validate').then((mod) => {
                mod.EmailAddress(newValue, SetErr, SetValue, getValue);
            });
        } else if (type === 'phone') {
            import('./validate').then((mod) => {
                mod.Phone(newValue, SetErr, SetValue, getValue);
            });
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

    return (
        <Container focus={focus}>
            {visiblePlaceholder ? (
                <Span red={err.display} focus={focus || value !== '' ? true : false}>
                    {placeholder} {err.display ? err.msg : null}
                </Span>
            ) : null}
            <InputField
                visiblePlaceholder={visiblePlaceholder}
                value={value}
                type={type}
                onFocus={() => SetFocus(true)}
                onBlur={() => SetFocus(false)}
                onChange={onChangeInput}
                autoComplete={`new-${type}`}
                autoFill='false'
                placeholder={visiblePlaceholder ? '' : placeholder}
            />
        </Container>
    );
};
export default Input;
