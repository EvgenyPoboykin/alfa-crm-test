import { lazy } from 'react';

const importStyle = (name: string, path: string) => {
    const style = lazy(() => import(`${path}`).then((mod) => ({ default: mod[`${name}`] })));
    return style;
};
const importComp = (path: string) => {
    const comp = lazy(() => import(`${path}`));
    return comp;
};
const importFunc = (name: string, path: string) => {
    const comp = import(__dirname + path).then((mod) => ({ default: mod[`${name}`] }));
    return comp;
};

export { importComp, importStyle, importFunc };
