import styled from 'styled-components';
import {} from './interfaces';

import logo from '../../../assets/images/logo.png';

export const Container = styled.div.attrs({ className: 'Logotype__container' })`
    padding: 10px;
`;
export const Logotype = styled.img.attrs({ className: 'Logotype__container', src: logo })`
    width: 200px;
`;
