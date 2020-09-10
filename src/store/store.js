import { combineReducers, createStore } from 'redux';
import ledgerReducer from './reducers/ledgerReducer';
import linguistReducer from './reducers/linguistReducer'

const rootReducer = combineReducers({ledgerReducer, linguistReducer});

//Export the combined reducer
export default createStore(rootReducer);