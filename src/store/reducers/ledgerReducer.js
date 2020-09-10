import { SET, APPEND } from '../actions/ledgerActions';

const initialState = {
    ledger: [],
};

export default function (state = initialState, action){
    switch(action.type){
        case SET: {

            const { ledger } = action.payload;
            console.log("made it to SET action: ");
            console.log(ledger);
            return { ...state, ledger}
        }
        
        case APPEND: {
            const { line } = action.payload;
            return { ...state, line }
        }

        default: {
            return state;
        }
        
    }
    return state;
}