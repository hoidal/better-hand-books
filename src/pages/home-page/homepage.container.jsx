import React from 'react';

import styles from './homepage.module.scss';

import MainImageContainer from '../../components/homepage-sections/main-image/main-image.component.jsx';
import SummarySection from '../../components/homepage-sections/about-summary-section/about-summary.component.jsx';
import ProcessSection from '../../components/homepage-sections/process-section/process-section.component.jsx';

const HomePage = ({ history }) => (
    <div className={styles.homePage}>
        <MainImageContainer />
        <SummarySection title="main" />
        <ProcessSection />
    </div>
);

export default HomePage;