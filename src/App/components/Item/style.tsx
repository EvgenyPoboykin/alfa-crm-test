import styled from 'styled-components';
import { ITd } from './interfaces';

export const Tr = styled.tr.attrs({ className: 'Item__container--tr' })`
    height: 60px;
    &:hover {
        background: #f2f2f2;
    }
`;
export const Td = styled.td.attrs({ className: 'Item__container--td' })`
    padding: 0px 20px;
    text-align: center;
    font-size: 0.75rem;

    &:nth-child(1) {
        text-align: left;
        max-width: 400px;
    }
    &:nth-child(3) {
        color: ${(props: ITd) => (props.colored ? '#2182f6' : 'red')};
    }
    &:nth-child(4) {
        color: ${(props: ITd) => (props.colored ? '#2182f6' : 'red')};
    }
`;
