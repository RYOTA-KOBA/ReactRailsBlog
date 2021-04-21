import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/dashboard"} component={Dashboard} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
