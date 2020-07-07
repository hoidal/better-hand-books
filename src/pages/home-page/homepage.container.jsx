import React from 'react';

import styles from './homepage.module.scss';

import MainImageContainer from '../../components/homepage-sections/main-image/main-image.component.jsx';
import ProcessSection from '../../components/homepage-sections/process-section/process-section.component.jsx';


// import { SECTION_1 } from './homepage.section-content.js';

const HomePage = ({ history }) => (
    <div className={styles.homePage}>
        <MainImageContainer />
        <ProcessSection />
    </div>
);

export default HomePage;