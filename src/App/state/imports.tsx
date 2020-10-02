import { lazy } from 'react';

export const importStyle = (name: string, path: string = './style') => {
    return lazy(() => import(path).then((mod) => ({ default: mod[name] })));
};
export const importComponent = (path: string) => {
    return lazy(() => import(path));
};
