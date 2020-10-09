import { lazy } from 'react';

const Authentication = lazy(() => import('../Pages/Authentication'));
const Clients = lazy(() => import('../Pages/Clients'));

export const routersMap = [
    { id: 1, path: '/', component: Authentication },
    { id: 2, path: '/customer', component: Clients },
    { id: 3, path: '*', component: Authentication },
];
