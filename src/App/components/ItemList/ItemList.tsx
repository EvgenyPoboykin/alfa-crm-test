import React, { lazy, memo, useContext } from 'react';
import { IItemList } from './interfaces';
import { ContextApp } from '../../state';
import { IItem } from '../../state/interfaces';

// styled
const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));

// components
const Item = lazy(() => import('../Item'));

const ItemList: React.FC<IItemList> = memo(() => {
    const {
        state: { items },
    } = useContext(ContextApp);

    return (
        <Container>
            {items.map((item: IItem) => (
                <Item key={item.id} item={item} />
            ))}
        </Container>
    );
});
export default ItemList;
