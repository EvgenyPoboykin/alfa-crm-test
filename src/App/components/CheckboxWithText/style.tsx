import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'CheckboxWithText__container' })`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 60px;
    height: 100%;
    border-radius: 6px;
`;
export const Content = styled.div.attrs({ className: 'CheckboxWithText__container--content' })`
    display: flex;
`;
export const Checkbox = styled.input.attrs({
    className: 'CheckboxWithText__container--checkbox',
    type: 'checkbox',
    id: 'system',
})`
    position: relative;
    display: flex;
    width: 15px;
    height: 15px;
`;
export const Span = styled.label.attrs({
    className: 'CheckboxWithText__container--span',
    type: 'checkbox',
    htmlFor: 'system',
})`
    padding-left: 10px;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    color: #999999;
`;
