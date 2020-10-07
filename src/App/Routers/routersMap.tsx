import Authentication from '../Pages/Authentication';
import Clients from '../Pages/Clients';

export const routersMap = [
    { id: 1, path: '/', component: Authentication },
    { id: 2, path: '/customer', component: Clients },
    { id: 3, path: '*', component: Authentication },
];
