// This file will be used to combine all the reducers
import { combineReducers } from "redux";

import message from './reducer';

const rootReducer = combineReducers({
    message,
});

export default rootReducer;