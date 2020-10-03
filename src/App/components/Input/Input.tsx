import React, { lazy, memo, useState } from 'react';
import { IInput } from './interfaces';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Span = lazy(() => import('./style').then((mod) => ({ default: mod.Span })));
const InputField = lazy(() => import('./style').then((mod) => ({ default: mod.InputField })));

const Input: React.FC<IInput> = ({ getValue, defaultValue, placeholder, type = 'text' }) => {
    const [focus, SetFocus] = useState(false);
    const [value, SetValue] = useState('');

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        SetValue(value);
        getValue(value);
    };

    return (
        <Container focus={focus}>
            <Span focus={focus || value !== '' ? true : false}>{placeholder}</Span>
            <InputField
                value={defaultValue}
                type={type}
                onFocus={() => SetFocus(true)}
                onBlur={() => SetFocus(false)}
                onChange={onChangeInput}
                autoComplete='new-password'
                autoFill='false'
            />
        </Container>
    );
};
export default memo(Input, (prev, next) => {
    if (prev !== next) {
        return false;
    }
    return true;
});
