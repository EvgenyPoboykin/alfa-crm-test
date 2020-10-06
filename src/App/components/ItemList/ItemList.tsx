import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { IItemList } from './interfaces';
import { ContextApp } from '../../state';

import { Tr, TBody, THead, Table } from './style';
import Item from '../Item';
import TableHeadItem from '../TableHeadItem';

const ItemList: React.FC<IItemList> = () => {
    const {
        app_state: { token },
        items_state,
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
                {items_state.map((item: any, index: number) => (
                    <Item key={index} item={item} />
                ))}
            </TBody>
        </Table>
    );
};
export default ItemList;
