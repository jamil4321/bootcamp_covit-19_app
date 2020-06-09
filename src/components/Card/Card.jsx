import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Card.module.css';
import cx from 'classnames';
import Countup from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading.....'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3}>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                        <Countup start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{ new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recoverd
                        </Typography>
                        <Typography variant="h5">
                        <Countup start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{ new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recoverd cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                        <Countup start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{ new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths Caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;