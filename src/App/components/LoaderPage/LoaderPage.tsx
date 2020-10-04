import React, { memo } from 'react';
import { Container } from './style';
import { ILoaderPage } from './interfaces';
import Loader from '../Loader/Loader';

const LoaderPage: React.FC<ILoaderPage> = memo(() => {
    return (
        <Container>
            <Loader />
        </Container>
    );
});
export default LoaderPage;
