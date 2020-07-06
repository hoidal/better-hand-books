import React from 'react';

import styles from './home-page.module.scss';

const HomePage = ({ history }) => (
    <div className={styles.homePage}>
        <section className={styles.headerImageContainer} />
        <section className={styles.homeSection1}>
            <h1>WHO WE ARE</h1>
        </section>
    </div>
);

export default HomePage;