import React, { lazy } from 'react';

import { IItemList } from './interfaces';

const Item = lazy(() => import('../Item'));
const TableHeadItem = lazy(() => import('../TableHeadItem'));

const Container = lazy(() => import('./style').then((m) => ({ default: m.Container })));
const Tr = lazy(() => import('./style').then((m) => ({ default: m.Tr })));
const TBody = lazy(() => import('./style').then((m) => ({ default: m.TBody })));
const THead = lazy(() => import('./style').then((m) => ({ default: m.THead })));
const Table = lazy(() => import('./style').then((m) => ({ default: m.Table })));

const ItemList: React.FC<IItemList> = ({ DisplayData }) => {
    return (
        <>
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
                    {DisplayData && DisplayData.map((item: any, index: number) => <Item key={index} item={item} />)}
                </TBody>
            </Table>
            {DisplayData === undefined ? <Container>Поиск ничего не дал!</Container> : null}
        </>
    );
};
export default ItemList;
