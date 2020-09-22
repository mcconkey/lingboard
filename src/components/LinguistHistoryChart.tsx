import React, {useState, useEffect} from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment'

type LedgerProps = {
    ledgerRows: {
        [index: string]: {
            timestamp: string,
            trainingHours: string,
            reading: string,
            listening: string,
        };
    },
}

type ScoreDatum = {
    score: string;
    date: string;
};

const data01 = [
                    {x: 1503617297689, y: 2}, 
                    {x: 1503616962277, y: 2.5}, 
                    {x: 1503616882654, y: 2}, 
                    {x: 1503611308914, y: 2.5}, 
                     ];
const data02 = [
                    {x: 1503617297689, y: 1.5}, 
                    {x: 1503616962277, y: 2}, 
                    {x: 1503616882654, y: 2}, 
                    {x: 1503611308914, y: 2.5}, 
                     ];





const LinguistHistoryChart = ({ ledgerRows = {} } : LedgerProps) => {

    // const [readingData, setReadingData] = useState<ScoreDatum[]>([]);
    // const [listeningData, setListeningData] = useState<ScoreDatum[]>([]);

    // determine if any rows have been passed
    const ledgerHasRows: boolean = Object.keys(ledgerRows).length > 0 ? true : false;

 

    let listeningData: ScoreDatum[] = [];
    let readingData: ScoreDatum[] = [];

    for (const row in ledgerRows) {
        //TODO: take timestamp make it a unix timestamp with moment js 
        if(ledgerRows[row].hasOwnProperty("reading") && ledgerRows[row].reading !== ""){
            readingData.push({score: ledgerRows[row].reading, date: ledgerRows[row].timestamp});
        }

        if(ledgerRows[row].hasOwnProperty("listening") && ledgerRows[row].listening !== ""){
            listeningData.push({score: ledgerRows[row].listening, date: ledgerRows[row].timestamp});
        }
    }

      
   

    console.log(listeningData);

    return (
          <React.Fragment>
            <ResponsiveContainer>
                <ScatterChart >
                <CartesianGrid  />
                <XAxis
                        type="number" 
                        dataKey={'date'} 
                        name='Date' 
                        domain = {['auto', 'auto']}
                        tickFormatter = {(datetime) => moment(datetime).format('MMM YY')} />
                <YAxis type="number" dataKey={'score'} name='Score' domain={[0, 5]} ticks={[.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]} />
                <ZAxis range={[100]}/>
                <Legend/>
                <Scatter name='Reading' data={readingData} fill='#FF2211' line shape="circle"/>
                <Scatter name='Listening' data={listeningData} fill='#1122FF' line shape="circle" />
                </ScatterChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}

export default LinguistHistoryChart;