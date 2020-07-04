import React from 'react';

import styles from './main-footer.module.scss';

const MainFooter = () => (
    <footer className={styles.footer}>
        <div className={styles.copyright}>
            <p>Copyright © 2020 Better Hand Books. All Rights Reserved.</p>
        </div>
    </footer>
);

export default MainFooter;