import React, { lazy, memo } from 'react';
import { IHeaderDescription } from './interfaces';

import { info } from './info';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));

const HeaderDescriptionItem = lazy(() => import('../HeaderDescriptionItem'));

const HeaderDescription: React.FC<IHeaderDescription> = memo(() => {
    return (
        <Container>
            <HeaderDescriptionItem job='job' desc={info.job} />
            <HeaderDescriptionItem job='developer' desc={info.developer} />
            <HeaderDescriptionItem job='stack' desc={info.stack} />
        </Container>
    );
});
export default HeaderDescription;
