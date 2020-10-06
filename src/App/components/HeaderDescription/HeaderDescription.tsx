import React from 'react';
import { IHeaderDescription } from './interfaces';
import { Container } from './style';
import HeaderDescriptionItem from '../HeaderDescriptionItem';
import { info } from './info';

const HeaderDescription: React.FC<IHeaderDescription> = () => {
    return (
        <Container>
            <HeaderDescriptionItem job='job' desc={info.job} />
            <HeaderDescriptionItem job='developer' desc={info.developer} />
            <HeaderDescriptionItem job='stack' desc={info.stack} />
        </Container>
    );
};
export default HeaderDescription;
