export const SET = 'SET';
export const APPEND = 'APPEND';

export const setLedger = (ledger) => {
    console.log("made to set ledger")
    return ({
        action: SET,
        payload: {
            ledger: ledger,
        } 
    });
};

export const appendLedger = (row) => {
    return({
        action: APPEND,
        payload: {
            row
        }
    });
}
