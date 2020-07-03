import React from 'react';
import { Link } from 'react-router-dom';

import styles from './main-nav-bar.module.scss';

const MainNavBar = () => (
    <header className={styles.navbar}>
        <Link className={styles.logoContainer} to="/">
            <h6>LOGO</h6>
        </Link>
        <div className={styles.menuItems}>
            <Link className={styles.menuItem} to="/">
                <h6>HOME</h6>
            </Link>
            <Link className={styles.menuItem} to="/about-us">
                <h6>ABOUT US</h6>
            </Link>
            <Link className={styles.menuItem} to="/books">
                <h6>BOOKS</h6>
            </Link>
            <Link className={styles.menuItem} to="/frequently-asked-questions">
                <h6>FAQ</h6>
            </Link>
            <Link className={`${styles.menuItem} ${styles.takeAction}`} to="/take-action">
                <h6>TAKE ACTION</h6>
            </Link>
        </div>
    </header>
);

export default MainNavBar;