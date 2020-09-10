import { SET, APPEND } from '../actions/ledgerActions';

const initialState = {
    ledger: []
};

export default function (state = initialState, action){
    switch(action.type){
        case SET: {
            const { linguist } = action.payload;
            return { ...state, linguist}
        }
        
        case APPEND: {
            const { line } = action.payload;
            return { ...state, line }
        }
        
    }
    return state;
}