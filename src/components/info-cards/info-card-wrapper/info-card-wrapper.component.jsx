import React from 'react';

import styles from './info-card-wrapper.module.scss';

import InfoCard from '../info-card/info-card.component.jsx';

const InfoCards = ({ cards }) => (
    <div className={styles.cardContainer}>
        {cards.map(card => (
            <InfoCard key={card.id} {...card} />
        ))}
    </div>
);

export default InfoCards;