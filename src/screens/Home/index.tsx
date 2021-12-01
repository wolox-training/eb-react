import React from 'react';
import { Route } from 'react-router-dom';

import { SignUp } from 'screens/SignUp';
import { Login } from 'screens/Login';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={`row middle center ${styles.app}`}>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/sign_up">
        <SignUp />
      </Route>
    </div>
  );
}

export default Home;
