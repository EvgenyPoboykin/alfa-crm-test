import React, { lazy, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { IItemList } from './interfaces';
import { ContextApp } from '../../state';

// styled
const Table = lazy(() => import('./style').then((mod) => ({ default: mod.Table })));
const THead = lazy(() => import('./style').then((mod) => ({ default: mod.THead })));
const TBody = lazy(() => import('./style').then((mod) => ({ default: mod.TBody })));
const Tr = lazy(() => import('./style').then((mod) => ({ default: mod.Tr })));

// components
const Item = lazy(() => import('../Item'));
const TableHeadItem = lazy(() => import('../TableHeadItem'));

const ItemList: React.FC<IItemList> = () => {
    const {
        appstate: { token },
        itemsstate,
    } = useContext(ContextApp);

    return token === '' ? (
        <Redirect to='/' />
    ) : (
        <Table>
            <THead>
                <Tr>
                    <TableHeadItem field='name' name='имя' />
                    <TableHeadItem field='dob' name='дата рождения' />
                    <TableHeadItem field='balance' name='остаток на счете' />
                    <TableHeadItem field='e_date' name='дд' />
                    <TableHeadItem field='email' name='элекстронная почта' />
                    <TableHeadItem field='phone' name='телефон' />
                    <TableHeadItem field='addr' name='адрес' />
                </Tr>
            </THead>
            <TBody>
                {itemsstate.map((item: any, index: number) => (
                    <Item key={index} item={item} />
                ))}
            </TBody>
        </Table>
    );
};
export default ItemList;
