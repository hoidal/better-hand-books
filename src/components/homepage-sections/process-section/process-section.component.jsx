import React from 'react';
import { Parallax } from 'react-parallax';

import styles from './process-section.module.scss';

import InfoCards from '../../info-cards/info-card-wrapper/info-card-wrapper.component.jsx';

const ProcessSection = () => (
    <Parallax
        bgImage={require('../../../assets/homepage/book-background-image.jpg')}
        bgImageStyle={{bacgroundPosition: 'bottom', zIndex: '-1', opacity: '.5'}}
        strength={500}
    >
        <div className={styles.section}>
            <InfoCards />
        </div>
    </Parallax>
);

export default ProcessSection;