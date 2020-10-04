import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'SearchInput__container' })`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 98px;
    padding: 20px 10px 40px 10px;
`;
export const Content = styled.div.attrs({ className: 'SearchInput__container--content' })`
    display: flex;
    max-width: 600px;
    width: 100%;
    height: 40px;
`;
export const BtnContainer = styled.div.attrs({ className: 'SearchInput__container--btn' })`
    display: flex;
    max-width: 200px;
    width: 100%;
    height: 40px;
    padding: 0px 10px;
`;
