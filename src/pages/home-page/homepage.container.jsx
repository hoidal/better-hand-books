import React from 'react';

import styles from './homepage.module.scss';

import MainImageContainer from '../../components/homepage-sections/main-image/main-image.component.jsx';
import SummarySection from '../../components/homepage-sections/summary-sections/summary-section.component.jsx';
import ProcessSection from '../../components/homepage-sections/process-section/process-section.component.jsx';

import { HOMEPAGE_CONTENT } from './homepage.data.js';

const HomePage = ({ history }) => (
    <div className={styles.homePage}>
        <MainImageContainer />
        <SummarySection content={HOMEPAGE_CONTENT.summarySection} />
        <ProcessSection {...HOMEPAGE_CONTENT.processSection} />
    </div>
);

export default HomePage;