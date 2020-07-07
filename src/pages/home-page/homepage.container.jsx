import React from 'react';

import styles from './homepage.module.scss';
import mainImage from '../../assets/homepage/home-page-background-image-1.jpg';

import { Parallax } from 'react-parallax';
import Paper from '@material-ui/core/Paper';
import MenuBookIcon from '@material-ui/icons/MenuBook';


import { SECTION_1 } from './homepage.section-content.js';

const HomePage = ({ history }) => (
    <div className={styles.homePage}>
        <section className={styles.headerImageContainer}>
            <img className={styles.image} src={mainImage} role="presentational" alt="" />
            <div className={styles.divider}> </div>
        </section>
        <Parallax
            bgImage={require('../../assets/homepage/home-page-background-image-2.jpg')}
            bgImageStyle={{bacgroundPosition: 'bottom', zIndex: '-1', opacity: '.5'}}
            strength={300}
        >
            <section className={styles.homeSection1}>
                <h1>{SECTION_1.title}</h1>
                <div className={styles.infoCardContainer}>
                    <Paper elevation={3}>
                    <div className={styles.infoCard}>
                        <MenuBookIcon style={{color: '#FC4A1A', fontSize: '5rem', marginTop: '1rem'}}/>
                        <h5>STEP 1</h5>
                        <p>lajegoaiwejgoiawgwoa</p>
                    </div>
                    </Paper>
                    <Paper elevation={3}>
                    <div className={styles.infoCard}>
                        <h5>STEP 2</h5>
                    </div>
                    </Paper>
                    <Paper elevation={3}>
                    <div className={styles.infoCard}>
                        <h5>STEP 3</h5>
                    </div>
                    </Paper>
                </div>
            </section>
        </Parallax>
    </div>
);

export default HomePage;