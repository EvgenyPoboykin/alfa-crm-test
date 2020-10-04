import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'Header__container' })`
    display: flex;
    width: 100%;
    max-height: 112px;
    height: 100%;
    align-items: center;
    padding: 0px 20px;
    justify-content: space-between;
`;
