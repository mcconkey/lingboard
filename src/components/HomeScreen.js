import React from 'react';
import clsx from 'clsx';
import useStyles from '../styles/styles'
import { Grid,
         Paper,
         } from '@material-ui/core/';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from  './Orders';
import ReadingScoresChart from './ReadingScoresChart';


const HomeScreen = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={4} lg={6}>
          <Paper className={fixedHeightPaper}>
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <ReadingScoresChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <ReadingScoresChart />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    );
};

export default HomeScreen;