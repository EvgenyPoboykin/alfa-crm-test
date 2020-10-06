import React from 'react';
import { IInput } from './interfaces';
import LogicInput from './logic';
import { Container, Span, InputField } from './style';

const Input: React.FC<IInput> = ({
    getValue,
    defaultValue,
    placeholder,
    type = 'text',
    visiblePlaceholder = true,
    onKeyDown,
}) => {
    const { err, focus, value, onChangeInput, SetFocus } = LogicInput(defaultValue, type, getValue);

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
                placeholder={visiblePlaceholder ? '' : placeholder}
                onKeyDown={onKeyDown}
            />
        </Container>
    );
};
export default Input;
