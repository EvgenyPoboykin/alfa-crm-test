import React, { lazy, memo, useState } from 'react';
import { IInput } from './interfaces';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Span = lazy(() => import('./style').then((mod) => ({ default: mod.Span })));
const InputField = lazy(() => import('./style').then((mod) => ({ default: mod.InputField })));

const Input: React.FC<IInput> = ({ getValue, defaultValue, placeholder, type = 'text', visiblePlaceholder = true }) => {
    const [focus, SetFocus] = useState(false);
    const [value, SetValue] = useState('');

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;

        SetValue(newValue);
        getValue(newValue);
    };

    return (
        <Container focus={focus}>
            {visiblePlaceholder ? (
                <Span
                    red={
                        placeholder.toLocaleLowerCase() === 'e-mail' &&
                        !value.toLocaleLowerCase().includes('@' && '.') &&
                        value !== ''
                    }
                    focus={focus || value !== '' ? true : false}
                >
                    {placeholder}{' '}
                    {placeholder.toLocaleLowerCase() === 'e-mail' &&
                    !value.toLocaleLowerCase().includes('@' && '.') &&
                    value !== ''
                        ? ' @ не правильный формат почты'
                        : null}
                </Span>
            ) : null}
            <InputField
                visiblePlaceholder={visiblePlaceholder}
                defaultValue={defaultValue}
                type={type}
                onFocus={() => SetFocus(true)}
                onBlur={() => SetFocus(false)}
                onChange={onChangeInput}
                autoComplete='new-password'
                autoFill='false'
                placeholder={visiblePlaceholder ? '' : placeholder}
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
