import 'scss/application.scss';
import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'screens/Home/index';
import { Login } from 'screens/Login';
import { SignUp } from 'screens/SignUp';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={`row middle center ${styles.app}`}>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/sign_up">
        <SignUp />
      </Route>
    </div>
  );
}

export default App;
