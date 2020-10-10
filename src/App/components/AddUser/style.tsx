import styled from 'styled-components';
import { IContainer } from './interfaces';

export const Container = styled.div.attrs({ className: 'AddUser__container' })<IContainer>`
    display: ${({dialog}) => (dialog ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    overflow: hidden;
`;

export const Form = styled.form.attrs({ className: 'AddUser__container--form' })`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px 40px;
    width: 712px;
    height: 680px;
    background: #fff;
    border-radius: 6px;
    z-index: 1;
`;
export const FormName = styled.div.attrs({ className: 'AddUser__container--form-name' })`
    font-size: 2rem;
    color: #2182f6;
`;
export const BtnsControl = styled.div.attrs({ className: 'AddUser__container--form-btns-control' })`
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
`;
export const BtnControl = styled.div.attrs({ className: 'AddUser__container--form-btn-control' })`
    width: 300px;
    height: 100%;
`;
export const Bg = styled.div.attrs({ className: 'AddUser__container--bg' })`
    display: flex;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.7;
    position: absolute;
    z-index: 0;
    cursor: pointer;
`;
