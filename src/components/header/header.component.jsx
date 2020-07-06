import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

import logo from '../../assets/bhb-logo.png';


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <Link>
                    <img role="presentational" src={logo} className={styles.logo} />
                </Link>
            </div>
            <div className={styles.options}>
                <Link className={styles.option}>
                    HOME
                </Link>
                <Link className={styles.option}>
                    ABOUT US
                </Link>
                <Link className={styles.option}>
                    BOOKS
                </Link>
                <Link className={styles.option}>
                    FAQ
                </Link>
                <Link className={`${styles.option} ${styles.takeAction}`}>
                    TAKE ACTION
                </Link>
            </div>
        </div>
    );
};

export default Header;