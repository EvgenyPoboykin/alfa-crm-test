import styled from 'styled-components';
import {} from './interfaces';

export const Th = styled.th.attrs({ className: 'TableHeadItem__container' })`
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
