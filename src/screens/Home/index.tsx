import React from 'react';

import { SignUp } from 'screens/SignUp';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={`row middle center ${styles.app}`}>
      <SignUp />
    </div>
  );
}

export default Home;
