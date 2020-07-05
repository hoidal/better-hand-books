import React from 'react';

import styles from './take-action-page.module.scss';

import actionCardData from './take-action-cards.data';
import InfoCard from '../../components/info-card/info-card.component';

const TakeActionPage = ({ history }) => (
    <div className={styles.actionContainer}>
        {
            actionCardData.map(({id, ...otherCardProps}) => (
                <InfoCard key={id} {...otherCardProps} />
            ))
        }
    </div>
);

export default TakeActionPage;