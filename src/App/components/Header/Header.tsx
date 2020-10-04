import React, { lazy, memo } from 'react';
import { IHeader } from './interfaces';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));

const Logotype = lazy(() => import('../Logotype'));
const HeaderDescription = lazy(() => import('../HeaderDescription'));

const Header: React.FC<IHeader> = memo(() => {
    return (
        <Container>
            <Logotype />
            <HeaderDescription />
        </Container>
    );
});
export default Header;
