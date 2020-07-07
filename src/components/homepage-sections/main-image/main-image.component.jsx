import React from 'react';

import mainImage from '../../../assets/homepage/main-background-image.jpg';

import styles from './main-image.module.scss';

const MainImageContainer = () => (
    <section className={styles.mainImageContainer}>
        <img className={styles.image} src={mainImage} role="presentational" alt="" />
        <div className={styles.divider}> </div>
    </section>
);

export default MainImageContainer;