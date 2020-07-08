import React from 'react';

import mainImage from '../../../assets/homepage/main-background-image.jpg';

import styles from './main-image.module.scss';

const MainImageContainer = () => (
    <section className={styles.container}>
        <img className={styles.image} src={mainImage} role="presentation" alt="" />
    </section>
);

export default MainImageContainer;