import React from 'react';

import styles from './wrapper.module.scss';

const Wrapper = ({ children }) => (
    <div className={styles.wrapper}>
        {children}
    </div>
);

export default Wrapper;