import React, { lazy } from 'react';
import { Logic } from './logic';

const Layuots = lazy(() => import('./components').then((mod) => ({ default: mod.Layuots })));

const App: React.FC = () => {
    return (
        <Logic>
            <Layuots />
        </Logic>
    );
};

export default App;
