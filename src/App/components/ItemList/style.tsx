import styled from 'styled-components';
import {} from './interfaces';

export const Table = styled.table.attrs({ className: 'ItemList__container' })`
    padding-top: 20px;
`;
export const TBody = styled.tbody.attrs({ className: 'ItemList__container--tbody' })``;
export const THead = styled.thead.attrs({ className: 'ItemList__container--thead' })``;
export const Tr = styled.tr.attrs({ className: 'ItemList__container--tr' })`
    height: 60px;
    user-select: none;
`;

export const Th = styled.th.attrs({ className: 'ItemList__container--th' })`
    padding: 0px 20px;
    text-align: center;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #777;
    border-top: 1px solid #777;
    border-bottom: 1px solid #777;
    cursor: pointer;

    &:hover {
        background: #f2f2f2;
    }
    &:nth-child(1) {
        text-align: left;
        max-width: 400px;
    }
`;
