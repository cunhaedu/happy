import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateOrphanage from './pages/CreateOrphanage';
import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphanagesMap} exact />
        <Route path="/orphanages/create" component={CreateOrphanage} exact />
        <Route path="/orphanages/:id" component={Orphanage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;