import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'ItemList__container' })`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
`;
export const Table = styled.table.attrs({ className: 'ItemList__container' })`
    padding-top: 20px;
`;
export const TBody = styled.tbody.attrs({ className: 'ItemList__container--tbody' })``;
export const THead = styled.thead.attrs({ className: 'ItemList__container--thead' })``;
export const Tr = styled.tr.attrs({ className: 'ItemList__container--tr' })`
    height: 60px;
    user-select: none;
`;
