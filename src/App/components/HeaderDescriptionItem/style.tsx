import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'HeaderDescriptionItem__container' })`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.75rem;
`;
export const Job = styled.div.attrs({ className: 'HeaderDescriptionItem__container--job' })`
    color: #999;
`;
export const Desc = styled.div.attrs({ className: 'HeaderDescriptionItem__container--job' })`
    padding-left: 7px;
    color: #2182f6;
`;
