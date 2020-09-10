import { ADD_LINGUIST } from '../actions/linguistsActions';

const initialState = {
    linguists: [],
};

export default function (state = initialState, action) {
    switch(action.type){
        case ADD_LINGUIST: {
            const { linguist } = action.payload;
            return { ...state, linguist}
        }
    }
    return state;
}