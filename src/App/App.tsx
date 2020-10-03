import React, { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Logic } from './logic';

const Routers = lazy(() => import('./components').then((mod) => ({ default: mod.Routers })));

const App: React.FC = () => {
    return (
        <Logic>
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        </Logic>
    );
};

export default App;
