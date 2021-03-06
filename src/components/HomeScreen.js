import React from 'react';
import clsx from 'clsx';
import useStyles from '../styles/styles'
import { Grid,
         Paper,
         } from '@material-ui/core/';
import RecentLedgerUpdates from  './RecentLedgerUpdates';
import ReadingScoresChart from './ReadingScoresChart';
import ListeningScoresChart from './ListeningScoresChart';
import LanguageHoursChart from './LanguageHoursChart';


const HomeScreen = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={4} lg={6}>
          <Paper className={fixedHeightPaper}>
              <LanguageHoursChart />
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
            <ListeningScoresChart />
          </Paper>
        </Grid>
        {/* Recent Recent Ledger Updates */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <RecentLedgerUpdates />
          </Paper>
        </Grid>
      </Grid>
    );
};

export default HomeScreen;