import React, { lazy } from 'react';
import { ILogotype } from './interfaces';

const Container = lazy(() => import('./style').then((m) => ({ default: m.Container })));
const Logo = lazy(() => import('./style').then((m) => ({ default: m.Logo })));

const Logotype: React.FC<ILogotype> = () => {
    return (
        <Container>
            <Logo />
        </Container>
    );
};
export default Logotype;
