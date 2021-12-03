import React from 'react';
import 'scss/application.scss';
import { Switch } from 'react-router-dom';

import Home from 'screens/Home/index';
import { Login } from 'screens/Login';
import { SignUp } from 'screens/SignUp';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';

function App() {
  return (
    <div className="row center">
      <Switch>
        <PublicRoute component={Login} exact path="/" />
        <PublicRoute component={SignUp} exact path="/sign_up" />
        <PrivateRoute component={Home} exact path="/home" />
      </Switch>
    </div>
  );
}

export default App;
