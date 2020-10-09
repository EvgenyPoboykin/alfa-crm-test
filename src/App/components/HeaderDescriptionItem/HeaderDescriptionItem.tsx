import React, { lazy } from 'react';
import { IHeaderDescriptionItem } from './interfaces';

const Container = lazy(() => import('./style').then((m) => ({ default: m.Container })));
const Job = lazy(() => import('./style').then((m) => ({ default: m.Job })));
const Desc = lazy(() => import('./style').then((m) => ({ default: m.Desc })));

const HeaderDescriptionItem: React.FC<IHeaderDescriptionItem> = ({ desc, job }) => {
    return (
        <Container>
            <Job>{job}: </Job>
            <Desc>{desc}</Desc>
        </Container>
    );
};
export default HeaderDescriptionItem;
