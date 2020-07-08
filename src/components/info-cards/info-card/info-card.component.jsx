import React from 'react';

import styles from './info-card.module.scss';


const InfoCard = ({ title, iconUrl, textContent }) => (
    <div className={styles.card}>
        <h4>{title.toUpperCase()}</h4>
        <p>{textContent}</p>
    </div>
);

export default InfoCard;
