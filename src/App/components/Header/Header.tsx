import React, { lazy } from 'react';
import { IHeader } from './interfaces';

const Logotype = lazy(() => import('../Logotype'));
const HeaderDescription = lazy(() => import('../HeaderDescription'));

const Container = lazy(() => import('./style').then((m) => ({ default: m.Container })));

const Header: React.FC<IHeader> = () => {
    return (
        <Container>
            <Logotype />
            <HeaderDescription />
        </Container>
    );
};
export default Header;
