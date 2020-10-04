import React, { lazy, memo } from 'react';
import { IHeaderDescriptionItem } from './interfaces';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Job = lazy(() => import('./style').then((mod) => ({ default: mod.Job })));
const Desc = lazy(() => import('./style').then((mod) => ({ default: mod.Desc })));

const HeaderDescriptionItem: React.FC<IHeaderDescriptionItem> = memo(({ desc, job }) => {
    return (
        <Container>
            <Job>{job}: </Job>
            <Desc>{desc}</Desc>
        </Container>
    );
});
export default HeaderDescriptionItem;
