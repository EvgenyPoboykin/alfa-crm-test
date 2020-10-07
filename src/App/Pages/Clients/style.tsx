import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'Layuots__container' })`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
`;
export const Content = styled.div.attrs({ className: 'Layuots__container--content' })`
    display: flex;
    max-width: 1280px;
    width: 100%;
    flex-direction: column;
    padding: 0px 20px 30px 20px;
    background: #fff;
`;
export const Btn = styled.div.attrs({ className: 'Layuots__container--content-btn' })`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 40px;
`;
export const BtnContainer = styled.div.attrs({ className: 'Layuots__container--content-btn-container' })`
    display: flex;
    width: 240px;
    height: 100%;
`;
