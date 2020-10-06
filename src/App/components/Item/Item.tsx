import React from 'react';
import { IItem } from './interfaces';
import LogicItem from './logic';
import { Tr, Td } from './style';

const Item: React.FC<IItem> = ({ item: { name, dob, balance, e_date, email, phone, addr, b_date } }) => {
    const { ColoredBgItem } = LogicItem(e_date, b_date);
    return (
        <Tr bg={ColoredBgItem()}>
            <Td>{name}</Td>
            <Td>{dob}</Td>
            <Td colored={parseFloat(balance) > 0}>{balance} &#8381;</Td>
            <Td colored={Date.parse(e_date) > Date.now()}>{e_date}</Td>
            <Td>{email}</Td>
            <Td>{phone.join(', ')}</Td>
            <Td>{addr}</Td>
        </Tr>
    );
};
export default Item;
