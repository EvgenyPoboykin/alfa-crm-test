import React, { useContext, useState } from 'react';
import { ContextApp } from '../../state';
import { ITableHeadItem } from './interfaces';
import { Th } from './style';

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
