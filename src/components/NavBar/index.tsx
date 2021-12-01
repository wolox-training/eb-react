import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from 'assets/logo-wolox.png';
import LocalStorageService from 'services/LocalStorageService';

import styles from './styles.module.scss';

export function NavBar() {
  const localStore = LocalStorageService;
  const logout = () => localStore.removeValue('access-token');
  return (
    <div className={`row middle space-around ${styles.container}`}>
      <img className={styles.logo} src={logo} />
      <NavLink to="/" onClick={logout}>
        Logout
      </NavLink>
    </div>
  );
}
