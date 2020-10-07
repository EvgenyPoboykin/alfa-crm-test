import React from 'react';

import { IItemList } from './interfaces';

import { Tr, TBody, THead, Table } from './style';
import Item from '../Item';
import TableHeadItem from '../TableHeadItem';
import { Container } from './style';

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
