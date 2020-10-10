import styled from 'styled-components';
import { ISpan, IContainer, IInputField } from './interfaces';

export const Span = styled.span.attrs({ className: 'Input__container' })<ISpan>`
    position: absolute;
    color: ${({red}) => (red ? 'red' : '#b3b3b3')};
    font-size: 12px;
    text-transform: uppercase;

    ${({focus}) =>
        focus &&
        `
        margin-top: -20px;
        font-size: 10px;
    `}

    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);
`;
export const InputField = styled.input.attrs({ className: 'Input__container--input-field' })<IInputField>`
    width: 100%;
    margin-top: ${({visiblePlaceholder}) => (visiblePlaceholder ? '15px' : '0px')};
    font-size: 1rem;
    font-weight: 500;
    font-family: Roboto, sans-serif;
    background-color: #fff;

    &:focus ${Span} {
        margin-top: -20px;
        font-size: 10px;
    }
`;

export const Container = styled.div.attrs({ className: 'Input__container' })<IContainer>`
    display: flex;
    align-items: center;
    width: 100%;
    max-height: 60px;
    height: 100%;
    border: 2px solid #b3b3b3;
    padding: 10px 20px;
    border-radius: 6px;
    position: relative;

    ${({focus}) =>
        focus &&
        `
        border: 2px solid #2182f6;
    `}

    &:hover {
        border: 2px solid #2182f6;
    }

    &:hover ${Span} {
        margin-top: -20px;
        font-size: 10px;
    }
`;
