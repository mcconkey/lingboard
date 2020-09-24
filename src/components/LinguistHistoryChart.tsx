import React from 'react';
import { ScatterChart, 
         Scatter, 
         XAxis, 
         YAxis, 
         CartesianGrid, 
         Tooltip, 
         Legend, 
         ResponsiveContainer, } from 'recharts';
import moment from 'moment';
import {ScoreDatum, LedgerProps} from '../types/LinguistBoardTypes';

/**
 * Given a list of ledger Rows this component uses recharts library to display
 * both the reading and listening scores found in the ledgerRows and plots them
 * in a scatter chart with connecting lines.
 * @param ledgerRows -- passed objectArray of ledgerRow objects from parent component
 */
const LinguistHistoryChart = ({ ledgerRows = {} } : LedgerProps) => {

    // initialize the listening and reading data arrays as arrays of Score Datums
    // {score: string, date: Number (unix timestamp) }
    let listeningData: ScoreDatum[] = [];
    let readingData: ScoreDatum[] = [];

    // iterate over the ledger rows
    for (const row in ledgerRows) {
    
        // if the row has the reading prop and it's not empty then...
        if(ledgerRows[row].hasOwnProperty("reading") && ledgerRows[row].reading !== ""){
            // init and format a unix timestamp from the row (row times can be whatever 
            // spreadsheet software use as format.  As long as it's resonable moment should
            // be able to turn it into a unix timestamp.
            let unixTime = moment(ledgerRows[row].timestamp).unix();
            readingData.push({score: ledgerRows[row].reading, date: unixTime});
        }

        // it is possible (and likely) that one row contains both listening & reading prop.
        // if the row has the listening prop and it's not empty then ... 
        if(ledgerRows[row].hasOwnProperty("listening") && ledgerRows[row].listening !== ""){
            let unixTime = moment(ledgerRows[row].timestamp).unix();
            listeningData.push({score: ledgerRows[row].listening, date: unixTime});
        }
    }
   
    // Return a React Fragment to render
    return (
          <React.Fragment>
            <ResponsiveContainer>
                <ScatterChart >
                <CartesianGrid  />
                <XAxis
                        type="number"  // unix timestamp
                        dataKey={'date'} 
                        name='Date' 
                        domain = {['auto', 'auto']} 
                        // tickFormater turns the timestamp into something more readable when 
                        // rendered on axis
                        tickFormatter = {(datetime) => moment.unix(datetime).format('MMM YY')} />
                <YAxis type="number" dataKey={'score'} name='Score' domain={[0, 5]} ticks={[.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]} />
                <Legend/>
                <Tooltip  formatter={(value, name) => { // iterates over x and y values 
                        if(name === 'Date'){ // if the name is Date -- format to human
                            return (moment.unix(Number(value)).format('MMM YY'));
                        }else{
                            return value; // else (the score acess), just return value
                        }   
                    }}/>
                <Scatter name='Reading' data={readingData} fill='#FF2211' line shape="circle"/>
                <Scatter name='Listening' data={listeningData} fill='#1122FF' line shape="circle" />
                </ScatterChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}

export default LinguistHistoryChart;