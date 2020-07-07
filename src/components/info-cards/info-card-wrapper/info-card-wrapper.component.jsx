import React from 'react';

import InfoCard from '../info-card/info-card.component.jsx';

import styles from './info-card-wrapper.module.scss';

const InfoCards = () => (
    <div className={styles.cardContainer}>
        <InfoCard />
        <InfoCard />
        <InfoCard />
    </div>
);

export default InfoCards;