import React, { lazy, memo } from 'react';
import { IButton } from './interfaces';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Btn = lazy(() => import('./style').then((mod) => ({ default: mod.Btn })));
const Name = lazy(() => import('./style').then((mod) => ({ default: mod.Name })));

const Button: React.FC<IButton> = memo(({ onClick, preloader, name, color = 'blue', disable }) => {
    return (
        <Container>
            <Btn color={color} disable={disable} onClick={onClick}>
                <Name>{name}</Name>
                {preloader}
            </Btn>
        </Container>
    );
});
export default Button;
