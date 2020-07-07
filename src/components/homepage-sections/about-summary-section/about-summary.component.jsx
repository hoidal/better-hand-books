import React from 'react';

import sectionImage from '../../../assets/homepage/about-summary-main-image.jpg';
import styles from './about-summary.module.scss';

import styled from 'styled-components';

const SplitContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: #4ABDAC;
        clip-path: polygon(0 0, 60% 0, 40% 100%, 0 100%);
    }

    &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);
        background-color: white;
        background-blend-mode: multiply;
        background-image: url(${sectionImage});
        opacity: 0.5;
        background-repeat: no-repeat;
        background-position: bottom right;
        background-size: cover;
    }
`

const SummarySection = () => (
    <div className={styles.container}>
        <SplitContainer />
    </div>
);

export default SummarySection;