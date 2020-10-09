import React from 'react';
import { Container } from './style';
import { ILoaderPage } from './interfaces';
import Loader from '../Loader';

const LoaderPage: React.FC<ILoaderPage> = () => {
    return (
        <Container>
            <Loader />
        </Container>
    );
};
export default LoaderPage;
