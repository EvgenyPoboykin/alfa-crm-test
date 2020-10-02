import React, { lazy, memo } from 'react';
import { Container } from './style';
import { ILayuots } from './interfaces';

const SearchInput = lazy(() => import('../SearchInput'));
const ItemList = lazy(() => import('../ItemList'));

const Layuots: React.FC<ILayuots> = memo(() => {
    return (
        <Container>
            <SearchInput />
            <ItemList />
        </Container>
    );
});
export default Layuots;
