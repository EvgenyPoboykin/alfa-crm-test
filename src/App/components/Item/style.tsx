import styled from 'styled-components';
import { ITd, ITr } from './interfaces';

const ColorBg = (number: number) => {
    if (number === 1) {
        return `background: rgba(24,24,24, 0);
         &:hover {
            background: rgba(24,24,24, 0.1);
        }`;
    } else if (number === 2) {
        return `background: rgba(34,181,115, 0.2); &:hover {
            background: rgba(34,181,115, 0.3);
        }`;
    } else {
        return `background: rgba(237,28,36, 0.2);
        &:hover {
    background: rgba(237,28,36, 0.3);
}`;
    }
};

export const Tr = styled.tr.attrs({ className: 'Item__container--tr' })`
    height: 60px;
    &:hover {
        background: #f2f2f2;
    }

    ${(props: ITr) => props.bg && ColorBg(props.bg)}
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
