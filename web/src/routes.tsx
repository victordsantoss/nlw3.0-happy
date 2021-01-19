import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrpanagesMap from './pages/OrphanagesMap';
import OrpanagesMap2 from './pages/OrphanagesMap2';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>  {/* Permite a chamada de uma única página*/}
                <Route path="/" exact component={Landing}></Route>
                <Route path="/app" component={OrpanagesMap}></Route>
                <Route path="/app2" component={OrpanagesMap2}></Route>
            </Switch>  
        </BrowserRouter>
    );
}

export default Routes;

