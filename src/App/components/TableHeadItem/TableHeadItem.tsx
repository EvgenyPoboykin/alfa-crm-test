import React, { useContext, useState, lazy } from 'react';
import { ContextApp } from '../../state';
import { ITableHeadItem } from './interfaces';

const Th = lazy(() => import('./style').then((m) => ({ default: m.Th })));

const TableHeadItem: React.FC<ITableHeadItem> = ({ name, field }) => {
    const [sortOrder, setSortOrder] = useState(false);
    const { onClickFilter } = useContext(ContextApp);

    const onClick = () => {
        const sort = !sortOrder;
        setSortOrder(sort);
        onClickFilter(field, sort);
    };

    return <Th onClick={onClick}>{name}</Th>;
};
export default TableHeadItem;
