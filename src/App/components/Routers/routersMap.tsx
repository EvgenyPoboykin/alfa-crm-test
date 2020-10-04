import Authentication from '../Authentication';
import Page from '../Page';

export const routersMap = [
    { id: 1, path: '/', component: Authentication },
    { id: 2, path: '/customer', component: Page },
    { id: 3, path: '*', component: Authentication },
];
