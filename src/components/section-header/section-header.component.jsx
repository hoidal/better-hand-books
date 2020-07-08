import React from 'react';

import styles from './section-header.module.scss';

const SectionHeader = ({ title }) => (
    <div className={styles.container}>
        <h2>{title.toUpperCase()}</h2>
        <div className={styles.divider} />
    </div>
);

export default SectionHeader;