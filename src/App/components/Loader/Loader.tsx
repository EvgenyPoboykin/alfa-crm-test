import React from 'react';
import { Container, Div } from './style';
import { ILoader } from './interfaces';

const Loader: React.FC<ILoader> = () => {
    return (
        <Container>
            <Div></Div>
            <Div></Div>
            <Div></Div>
            <Div></Div>
        </Container>
    );
};
export default Loader;
