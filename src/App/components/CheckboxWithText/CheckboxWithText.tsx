import React, { lazy, memo } from 'react';
import { ICheckboxWithText } from './interfaces';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Content = lazy(() => import('./style').then((mod) => ({ default: mod.Content })));
const Checkbox = lazy(() => import('./style').then((mod) => ({ default: mod.Checkbox })));
const Span = lazy(() => import('./style').then((mod) => ({ default: mod.Span })));

const CheckboxWithText: React.FC<ICheckboxWithText> = memo(({ defaultValue, name, color = 'blue', getValue }) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.checked;
        getValue(value);
    };
    return (
        <Container>
            <Content>
                <Checkbox color={color} defaultChecked={defaultValue} onChange={onChange} />
                <Span>{name}</Span>
            </Content>
        </Container>
    );
});
export default CheckboxWithText;
