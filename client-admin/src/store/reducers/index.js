import {combineReducers} from 'redux'
import userReducer from './user'
import scheduleReducer from './schedule'
import medicineReducer from './medicine'
import historyReducer from './history'
import doctorReducer from "./doctor"


export const reducer = combineReducers({
    userState: userReducer,
    scheduleState: scheduleReducer,
    medicineState: medicineReducer,
    historyState: historyReducer,
    doctorState: doctorReducer
})
