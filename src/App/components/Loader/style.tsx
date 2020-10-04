import styled, { keyframes } from 'styled-components';
import {} from './interfaces';

const animation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div.attrs({ className: 'Loader__container' })`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 30px;
`;
export const Div = styled.div.attrs({ className: 'Loader__container--div' })`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    border: 4px solid #fff;
    border-radius: 50%;
    animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;

    &:nth-child(1) {
        animation-delay: -0.45s;
    }
    &:nth-child(2) {
        animation-delay: -0.3s;
    }
    &:nth-child(3) {
        animation-delay: -0.15s;
    }
`;
