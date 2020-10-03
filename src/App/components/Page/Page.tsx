import React, { lazy, memo } from 'react';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));

const SearchInput = lazy(() => import('../SearchInput'));
const ItemList = lazy(() => import('../ItemList'));

const Page: React.FC = memo(() => {
    return (
        <Container>
            <SearchInput />
            <ItemList />
        </Container>
    );
});
export default Page;
