import React from 'react';

import styles from './info-card.module.scss';

const InfoCard = ({ title }) => (
    <div className={styles.infoCard}>
        {title}
    </div>
);

export default InfoCard;