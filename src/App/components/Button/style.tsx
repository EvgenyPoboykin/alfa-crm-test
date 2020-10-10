import styled from 'styled-components';
import { IBtn } from './interfaces';

const colorsBtn = (color: string) => {
    if (color === 'green') return '#36a54e';
    if (color === 'red') return '#ed1c24';
    if (color === 'blue') return '#2182f6';
};
const colorsHoverBtn = (color: string) => {
    if (color === 'green') return '#257033';
    if (color === 'red') return '#b21823';
    if (color === 'blue') return '#1966b2';
};

export const Container = styled.div.attrs({ className: 'Button__container' })`
    display: flex;
    width: 100%;
    max-height: 60px;
    height: 100%;
    border-radius: 6px;
    overflow: hidden;
`;
export const Btn = styled.button.attrs({ className: 'Button__container--button' })<IBtn>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 60px;
    height: 100%;

    ${({disable, color}) =>
        disable
            ? `background-color: #999999; pointer-event: none; `
            : `
            cursor: pointer;
            pointer-event: all;
            background-color: ${color ? colorsBtn(color) : '#999999'};
&:hover {
        background-color: ${color ? colorsHoverBtn(color) : '#999999'};
    }
    `}

    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
export const Name = styled.div.attrs({ className: 'Button__container--button-name' })`
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    color: #fff;
    user-select: none;
`;
