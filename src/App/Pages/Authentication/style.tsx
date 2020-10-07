import styled from 'styled-components';
import {} from './interfaces';

export const Container = styled.div.attrs({ className: 'Authentication__container' })`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgb(33, 130, 246);
    background: linear-gradient(45deg, rgba(33, 130, 246, 1) -50%, rgba(54, 165, 78, 1) 150%);
`;
export const FormContainer = styled.div.attrs({ className: 'Authentication__container--form-container' })`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    max-height: 500px;
    padding: 40px;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
`;
export const Form = styled.form.attrs({ className: 'Authentication__container--form' })`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 100%;
    flex-direction: column;
`;
