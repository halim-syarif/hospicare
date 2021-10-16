import {combineReducers} from 'redux'
import userReducer from './user'
import scheduleReducer from './schedule'


export const reducer = combineReducers({
    userState: userReducer,
    scheduleState: scheduleReducer
})
