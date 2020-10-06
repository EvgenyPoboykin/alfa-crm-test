import React from 'react';
import { ILogotype } from './interfaces';
import { Container, Logo } from './style';

const Logotype: React.FC<ILogotype> = () => {
    return (
        <Container>
            <Logo />
        </Container>
    );
};
export default Logotype;
