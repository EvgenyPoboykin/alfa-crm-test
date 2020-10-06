import React from 'react';
import { IHeaderDescriptionItem } from './interfaces';
import { Container, Job, Desc } from './style';

const HeaderDescriptionItem: React.FC<IHeaderDescriptionItem> = ({ desc, job }) => {
    return (
        <Container>
            <Job>{job}: </Job>
            <Desc>{desc}</Desc>
        </Container>
    );
};
export default HeaderDescriptionItem;
