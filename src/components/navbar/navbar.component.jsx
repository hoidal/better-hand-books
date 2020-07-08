import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

import logo from '../../assets/bhb-logo.png';


const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <img role="presentation" src={logo} className={styles.logo} alt="" />
                </Link>
            </div>
            <div className={styles.options}>
                <Link className={styles.option} to="/">
                    HOME
                </Link>
                <Link className={styles.option} to="/about-us">
                    ABOUT US
                </Link>
                <Link className={styles.option} to="/books">
                    BOOKS
                </Link>
                <Link className={styles.option} to="/frequently-asked-questions">
                    FAQ
                </Link>
                <Link className={`${styles.option} ${styles.takeAction}`} to="take-action">
                    TAKE ACTION
                </Link>
            </div>
        </div>
    );
};

export default NavBar;