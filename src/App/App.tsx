import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Logic } from './logic';

import { Routers } from './components';

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
