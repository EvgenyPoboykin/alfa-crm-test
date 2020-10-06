import React from 'react';
import { IHeader } from './interfaces';
import { Container } from './style';
import Logotype from '../Logotype';
import HeaderDescription from '../HeaderDescription';

const Header: React.FC<IHeader> = () => {
    return (
        <Container>
            <Logotype />
            <HeaderDescription />
        </Container>
    );
};
export default Header;
