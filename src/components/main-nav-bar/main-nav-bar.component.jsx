import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/bhb-logo.png';

import styles from './main-nav-bar.module.scss';

const MainNavBar = () => (
    <div className={styles.headerBackground}>
        <header className={styles.navbar}>
            <Link className={styles.logoContainer} to="/">
            <img className={styles.logo} src={logo} alt="logo"></img>
            </Link>
            <div className={styles.menuItems}>
                <Link className={styles.menuItem} to="/">
                    HOME
                </Link>
                <Link className={styles.menuItem} to="/about-us">
                    ABOUT US
                </Link>
                <Link className={styles.menuItem} to="/books">
                    BOOKS
                </Link>
                <Link className={styles.menuItem} to="/frequently-asked-questions">
                    FAQ
                </Link>
                <Link className={`${styles.menuItem} ${styles.takeAction}`} to="/take-action">
                    TAKE ACTION
                </Link>
            </div>
        </header>
    </div>
);

export default MainNavBar;