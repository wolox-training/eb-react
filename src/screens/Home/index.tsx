import React from 'react';
import { useRouteMatch, Switch, Redirect } from 'react-router-dom';

import { NavBar } from 'components/NavBar';
import BookList from 'screens/BookList';
import { PrivateRoute } from 'components/PrivateRoute';
import BookDetail from 'screens/BookDetail';

function Home() {
  const { path } = useRouteMatch();

  return (
    <>
      <NavBar />
      <Switch>
        <Redirect exact from={path} to={`${path}/books`} />
        <PrivateRoute exact component={BookList} path={`${path}/books`} />
        <PrivateRoute component={BookDetail} path={`${path}/books/:id`} />
      </Switch>
    </>
  );
}

export default Home;
