import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

import logo from '../../assets/bhb-logo.png';


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <img role="presentational" src={logo} className={styles.logo} />
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

export default Header;