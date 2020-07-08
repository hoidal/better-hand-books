import React from 'react';
import { Parallax } from 'react-parallax';

import styles from './process-section.module.scss';

import SectionHeader from '../../section-header/section-header.component.jsx';
import InfoCards from '../../info-cards/info-card-wrapper/info-card-wrapper.component.jsx';

const ProcessSection = ({ title, statusSummary, infoCards }) => (
    <Parallax
        bgImage={require('../../../assets/homepage/book-background-image.jpg')}
        bgImageStyle={{bacgroundPosition: 'bottom', zIndex: '-1', opacity: '.5'}}
        strength={500}
    >
        <div className={styles.content}>
            <SectionHeader title={title} />
            <InfoCards cards={infoCards} />
        </div>
    </Parallax> 
);

export default ProcessSection;
