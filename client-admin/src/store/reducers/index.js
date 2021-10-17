import {combineReducers} from 'redux'
import userReducer from './user'
import scheduleReducer from './schedule'
import medicineReducer from "./medicine"


export const reducer = combineReducers({
    userState: userReducer,
    scheduleState: scheduleReducer,
    medicineState: medicineReducer
})
