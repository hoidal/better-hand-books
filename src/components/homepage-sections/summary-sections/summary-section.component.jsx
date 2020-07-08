import React from 'react';

import styles from './summary-section.module.scss';

const SummarySection = ({ content }) => (
    <div className={styles.container}>
        <div className={styles.content}>{content}</div>
    </div>
);

export default SummarySection;