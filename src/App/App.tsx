import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoaderPage } from './components';
import { Logic } from './logic';

const Routers = lazy(() => import('./Routers'));

const App: React.FC = () => {
    return (
        <Suspense fallback={<LoaderPage />}>
            <Logic>
                <BrowserRouter>
                    <Routers />
                </BrowserRouter>
            </Logic>
        </Suspense>
    );
};

export default App;
