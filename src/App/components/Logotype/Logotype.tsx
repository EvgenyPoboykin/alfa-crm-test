import React, { lazy, memo } from 'react';
import { ILogotype } from './interfaces';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Logo = lazy(() => import('./style').then((mod) => ({ default: mod.Logotype })));

const Logotype: React.FC<ILogotype> = memo(() => {
    return (
        <Container>
            <Logo />
        </Container>
    );
});
export default Logotype;
