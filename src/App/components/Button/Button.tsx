import React from 'react';
import { IButton } from './interfaces';
import { Container, Btn, Name } from './style';

const Button: React.FC<IButton> = ({ onClick, preloader, name, color = 'blue', disable }) => {
    return (
        <Container>
            <Btn color={color} disable={disable} onClick={onClick}>
                <Name>{name}</Name>
                {preloader}
            </Btn>
        </Container>
    );
};
export default Button;
