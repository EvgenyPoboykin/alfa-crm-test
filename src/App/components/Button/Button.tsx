import React, { lazy } from 'react';
import { IButton } from './interfaces';

const Container = lazy(() => import('./style').then((m) => ({ default: m.Container })));
const Btn = lazy(() => import('./style').then((m) => ({ default: m.Btn })));
const Name = lazy(() => import('./style').then((m) => ({ default: m.Name })));

const Button: React.FC<IButton> = ({ onClick, preloader, name, color = 'blue', disable }) => {
    return (
        <Container>
            <Btn color={color} disable={disable} onClick={onClick}>
                <Name>{name}</Name>
                {preloader}
            </Btn>
        </Container>
    );
};
export default Button;
