import React, {useState, useEffect} from 'react';
import { ButtonGroup, Button } from '@material-ui/core';

type LedgerProps = {
    ledgerRows: {
        [index: string]: {
            timestamp: string,
            trainingHours: string,
        };
    },
}

enum Period {
    'ALL_TIME',
    'THIS_MONTH'
}
/**
 * This component accepts a set of ledger rows and displays the total number of hours
 * based upon the period selected (this month, or all time). 
 * 
 * @param ledgerRows<LedgerObject> 
 * @returns JSX React.Fragment 
 */
const LinguistLanguageHours = ({ ledgerRows = {} } : LedgerProps) => {

    //initalize the total hours 
    const [hours, setHours] = useState(0);

    //initialize the period over which we will sum the language hours from the ledger
    const [period, setPeriod] = useState(Period.ALL_TIME);

    // determine if any rows have been passed
    const ledgerHasRows: boolean = Object.keys(ledgerRows).length > 0 ? true : false;

    /**
     * Handler function which responds when the user clicks buttons to select 
     * period of time over which to total hours
     * @param p<Period>
     */
    const setPeriodButtonHandler = (p : Period) => {
        // Set the period state (using the useState hook)
        setPeriod(p);
    }


    useEffect(()=> {
        if(!ledgerHasRows){
             setHours(0);
         }
        let total = 0;
        for (const row in ledgerRows) {
            
            if(ledgerRows[row].hasOwnProperty("trainingHours")){
                total += Number(ledgerRows[row].trainingHours);
            }
        }
        
        setHours(total);

    }, [ledgerRows, period, setHours, ledgerHasRows])

    return(
        <React.Fragment>
            <h3 style={{fontSize: '3rem', marginTop: '0px'}}>{hours}</h3> 
            <ButtonGroup fullWidth size="small" variant="contained" aria-label="contained primary button group">
                <Button 
                    style={{fontSize: '.7rem'}} 
                    color={period === Period.THIS_MONTH ? "primary" : "default"}
                    onClick={() => setPeriodButtonHandler(Period.THIS_MONTH)}>
                        This Month
                </Button>
                <Button 
                    style={{fontSize: '.7rem'}} 
                    color={period === Period.ALL_TIME ? "primary" : "default"}
                    onClick={() => setPeriodButtonHandler(Period.ALL_TIME)}>
                        All Time
                </Button>
            </ButtonGroup>
        </React.Fragment>
    );
}

export default LinguistLanguageHours;