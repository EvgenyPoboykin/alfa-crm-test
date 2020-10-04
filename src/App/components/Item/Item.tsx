import React, { memo, lazy } from 'react';

import { IItem } from './interfaces';

// styled
const Tr = lazy(() => import('./style').then((mod) => ({ default: mod.Tr })));
const Td = lazy(() => import('./style').then((mod) => ({ default: mod.Td })));

const Item: React.FC<IItem> = memo(({ item: { name, dob, balance, e_date, email, phone, addr } }) => {
    return (
        <Tr>
            <Td>{name}</Td>
            <Td>{dob}</Td>
            <Td colored={parseFloat(balance) > 0}>{balance}</Td>
            <Td colored={Date.parse(e_date) > Date.now()}>{e_date}</Td>
            <Td>{email}</Td>
            <Td>{phone.join(', ')}</Td>
            <Td>{addr}</Td>
        </Tr>
    );
});
export default Item;
