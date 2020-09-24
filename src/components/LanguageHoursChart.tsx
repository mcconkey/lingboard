import React from 'react';
import { BarChart,
         Bar,
         XAxis,
         YAxis, 
         CartesianGrid, 
         Tooltip, 
         Legend, 
         ResponsiveContainer} from 'recharts';
import moment from 'moment';
import Title from '../Title';
import { ledgerState } from '../atoms/ledgerAtom';
import { useRecoilValue } from 'recoil';

type LedgerRows = {
    [index: string]: {
        timestamp: string,
        trainingHours: string,
        reading: string,
        listening: string,
    }
}


type ChartProps = {
    ledgerRows: LedgerRows,
    buckets: Number,
}

type Bucket = {
    hours: number,
    month: string, // the month
}



/**
 * Creates the bar chart on the main dashbord page.  Totals up the hours from
 * all ledger rows and puts them in to buckets of the last six months (this 
 * can be adjusted by passing a buckets property.)
 * 
 * @param param ChartProps
 */
const LanguageHoursChart = ({ buckets = 6}: ChartProps) => {
    
    // Use recoil to pull the full ledger state
    // TODO -- TypeScript is being dificult would love it 
    // if i didn't cop-out with casting 'any' type.
    const ledgerRows: any = useRecoilValue(ledgerState);
    
    // initialize an array of data buckets
    let hourBuckets: Bucket[] = [];

    // create n data buckets where n is the number specified by the buckets property
    for(let i = 0; i < buckets; i++){
        let bucket = {hours: 0, month: moment().subtract(i, 'months').format("MMM YY")};
        hourBuckets.push(bucket);
    }
       
    // iterate over the ledger rows (if there are any) 
    if(ledgerRows.length > 0) {
        for (const row in ledgerRows) {
            
            // for expediency put the row data into a temp var
            let data = ledgerRows[row].data;
            
            // check to see if the row has training hours
            if(data.trainingHours !== "" && data.trainingHours !== 0){
                
                // using date get the month year (we used this to name the buckets)
                let rowMonth = moment(data.timestamp).format("MMM YY"); 
                
                // iterate over the buckets to see if the current row's data fits
                hourBuckets = hourBuckets.map((bucket: Bucket) => {
                
                    // if the bucket month (the data label) and the rowMonth match, 
                    // then that data belongs in this bucket
                    if(bucket.month === rowMonth){

                        // put add the row's language hours of the bucket
                        bucket.hours += parseInt(data.trainingHours);
                    }

                    // return bucket to map function
                    return bucket;
                 });
               
            }
            
        }
    }

    return(
        <React.Fragment>
            <Title>Unit Trainig Hours</Title>
            <ResponsiveContainer>
                <BarChart data={hourBuckets}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis reversed={true} dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="hours" fill="#8884db" />
                </BarChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}

export default LanguageHoursChart;