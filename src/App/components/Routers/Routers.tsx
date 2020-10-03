import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routersMap } from './routersMap';
import { IRouters } from './interfaces';

const Routers: React.FC<IRouters> = memo(() => {
    return (
        <Switch>
            {routersMap.map(({ id, path, component }) => (
                <Route exact key={id} path={path} component={component} />
            ))}
        </Switch>
    );
});
export default Routers;
