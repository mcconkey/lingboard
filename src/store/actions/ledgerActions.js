export const SET = 'SET';
export const APPEND = 'APPEND';

export const setLeger = (ledger) => {
    return ({
        action: SET,
        payload: {
            ledger
        } 
    });
};
