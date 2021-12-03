import React, { FunctionComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';

import LocalStorageService from 'services/LocalStorageService';

interface IPrivateRoute {
  path: string;
  exact: boolean;
  component: FunctionComponent<any>;
}

export function PrivateRoute({ component: Component, ...rest }: IPrivateRoute) {
  const storageService = LocalStorageService;
  const isLogged = storageService.getValue('access-token');
  return <Route {...rest} render={props => (isLogged ? <Component {...props} /> : <Redirect to="/" />)} />;
}
