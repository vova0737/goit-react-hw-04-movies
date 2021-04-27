import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <>
      <ul className={styles.HeaderContainer}>
        <li className={styles.HeaderTitles}>
          <NavLink
            exact
            to="/"
            className={styles.HeaderLink}
            activeClassName={styles.HeaderLinkActive}
          >
            <h3>Home</h3>
          </NavLink>
        </li>
        <li className={styles.HeaderTitles}>
          <NavLink
            to="/movies"
            className={styles.HeaderLink}
            activeClassName={styles.HeaderLinkActive}
          >
            <h3>Movies</h3>
          </NavLink>
        </li>
      </ul>
      ;
    </>
  );
};

export default NavBar;
