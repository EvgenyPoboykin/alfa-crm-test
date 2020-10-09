import React, { lazy } from 'react';
import { IHeaderDescription } from './interfaces';

const HeaderDescriptionItem = lazy(() => import('../HeaderDescriptionItem'));

const Container = lazy(() => import('./style').then((m) => ({ default: m.Container })));

const info = {
    job: 'TEST WORK',
    developer: 'Evgeny Poboykin',
    stack: 'React, TypeScript, styled-components',
};

const HeaderDescription: React.FC<IHeaderDescription> = () => {
    return (
        <Container>
            <HeaderDescriptionItem job='job' desc={info.job} />
            <HeaderDescriptionItem job='developer' desc={info.developer} />
            <HeaderDescriptionItem job='stack' desc={info.stack} />
        </Container>
    );
};
export default HeaderDescription;
