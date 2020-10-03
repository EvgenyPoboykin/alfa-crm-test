import React, { lazy, memo } from 'react';
import { IButton } from './interfaces';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Btn = lazy(() => import('./style').then((mod) => ({ default: mod.Btn })));

const Button: React.FC<IButton> = memo(({ name, color = 'blue', disable }) => {
    return (
        <Container>
            <Btn color={color} disable={disable}>
                {name}
            </Btn>
        </Container>
    );
});
export default Button;
