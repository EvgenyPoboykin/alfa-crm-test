import React, { memo, lazy } from 'react';

import { IItem } from './interfaces';

const DAY = 86400000;

// styled
const Tr = lazy(() => import('./style').then((mod) => ({ default: mod.Tr })));
const Td = lazy(() => import('./style').then((mod) => ({ default: mod.Td })));

const Item: React.FC<IItem> = memo(({ item: { name, dob, balance, e_date, email, phone, addr, registr_date } }) => {
    const now = new Date();
    const date = new Date(e_date);
    const registr = new Date(registr_date);

    const ColorBgItem = () => {
        if (date.getTime() < now.getTime()) {
            return 3;
        } else if (now.getTime() < registr.getTime() + DAY) {
            return 2;
        } else {
            return 1;
        }
    };
    return (
        <Tr bg={ColorBgItem()}>
            <Td>{name}</Td>
            <Td>{dob}</Td>
            <Td colored={parseFloat(balance) > 0}>{balance} &#8381;</Td>
            <Td colored={Date.parse(e_date) > Date.now()}>{e_date}</Td>
            <Td>{email}</Td>
            <Td>{phone.join(', ')}</Td>
            <Td>{addr}</Td>
        </Tr>
    );
});
export default Item;
