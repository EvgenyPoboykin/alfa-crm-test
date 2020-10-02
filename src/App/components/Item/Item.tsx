import React, { memo, lazy } from 'react';

import { IItem } from './interfaces';

// styled
const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));

const Item: React.FC<IItem> = memo(({ item: { name, dob, balance, e_date, email, phone, addr } }) => {
    return (
        <Container>
            {name} {dob} {balance} {e_date} {email} {phone} {addr}
        </Container>
    );
});
export default Item;
