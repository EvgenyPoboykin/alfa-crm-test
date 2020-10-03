import styled from 'styled-components';
import { IBtn } from './interfaces';

export const Container = styled.div.attrs({ className: 'Button__container' })`
    display: flex;
    width: 100%;
    max-height: 60px;
    height: 100%;
    border-radius: 6px;
    overflow: hidden;
`;
export const Btn = styled.button.attrs({ className: 'Button__container--button' })`
    width: 100%;
    max-height: 60px;
    height: 100%;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;

    ${(props: IBtn) =>
        props.disable
            ? `background-color: #999999; pointer-event: none;`
            : `
            pointer-event: all;
            background-color: ${props.color === 'green' ? '#36a54e' : '#2182f6'};
&:hover {
        background-color: ${props.color === 'green' ? '#297c39' : '#1b75ce'};
    }
    `}

    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
