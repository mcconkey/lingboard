/* eslint-disable array-callback-return */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Grid } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { rosterState } from '../atoms/rosterAtom';
import clsx from 'clsx';
import useStyles from '../styles/styles'
import LinguistHistory from '../components/LinguistHistory';
import LinguistLanguageHours from '../components/LinguistLanguageHours';
import LinguistHistoryChart from '../components/LinguistHistoryChart';


const Linguist = () => {
    const classes = useStyles();
    let { linguistKey } = useParams();
    const roster = useRecoilValue(rosterState);
    let linguistNotFound = false;
    let linguist = {};

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    if(roster.hasOwnProperty(linguistKey)){
        linguist = roster[linguistKey];
    }else{
        linguistNotFound = true;
    }
    
    return(
            <React.Fragment>
            {linguistNotFound &&
                <h1>Linguist not found</h1>
            }
            {!linguistNotFound &&
                <h1>{linguist.name}</h1>}

             <Grid container spacing={3}>
                {/* Score history chart */}
                <Grid item xs={12} md={4} lg={6}>
                <Paper className={fixedHeightPaper}>
                    <LinguistHistoryChart ledgerRows={linguist.ledgerRows} />
                </Paper>
                </Grid>
                {/* Scores */}
                <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                    <h3>Current Scores</h3>
                    <h2 style={{fontSize: '2rem'}}>
                        {!linguistNotFound && linguist.attributes.reading.value ? "R" + linguist.attributes.reading.value : "-"}{", "} 
                        {!linguistNotFound && linguist.attributes.listening.value ? "L"+ linguist.attributes.listening.value: "-"}
                    </h2>
                </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                    <h3>Lanugage Hours</h3>
                    <LinguistLanguageHours ledgerRows={linguist.ledgerRows}/>
                </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper>
                        <LinguistHistory ledgerRows={linguist.ledgerRows} />
                    </Paper>
                </Grid>
            </Grid>

       </React.Fragment>);
}

export default Linguist;