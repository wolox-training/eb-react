import React from 'react';

import { NavBar } from 'components/NavBar';
import BookList from 'screens/BookList';

function Home() {
  return (
    <>
      <NavBar />
      <BookList />
    </>
  );
}

export default Home;
