import React, { lazy, memo, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { IItemList } from './interfaces';
import { ContextApp } from '../../state';

// styled
const Table = lazy(() => import('./style').then((mod) => ({ default: mod.Table })));
const THead = lazy(() => import('./style').then((mod) => ({ default: mod.THead })));
const TBody = lazy(() => import('./style').then((mod) => ({ default: mod.TBody })));
const Tr = lazy(() => import('./style').then((mod) => ({ default: mod.Tr })));
const Th = lazy(() => import('./style').then((mod) => ({ default: mod.Th })));

// components
const Item = lazy(() => import('../Item'));

const ItemList: React.FC<IItemList> = memo(() => {
    const {
        appstate: { items, token },
    } = useContext(ContextApp);

    return token === '' ? (
        <Redirect to='/' />
    ) : (
        <Table>
            <THead>
                <Tr>
                    <Th>имя</Th>
                    <Th>дата рождения</Th>
                    <Th>остаток на счете</Th>
                    <Th>дд</Th>
                    <Th>элекстронная почта</Th>
                    <Th>телефон</Th>
                    <Th>адрес</Th>
                </Tr>
            </THead>
            <TBody>
                {items.map((item: any) => (
                    <Item key={item.id} item={item} />
                ))}
            </TBody>
        </Table>
    );
});
export default ItemList;
