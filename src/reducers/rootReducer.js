import { combineReducers } from 'redux';
import userDetailsReducer from './userDetailsReducers'

const rootReducer = combineReducers ({
    userdetails: userDetailsReducer,
});

export default rootReducer;