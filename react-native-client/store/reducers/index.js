import { combineReducers } from "redux";
import patientReducer from './patientReducer'
import scheduleReducer from './scheduleReducer'
import historyReducer from './historyReducer'

const reducer = combineReducers({
    patients: patientReducer,
    schedules: scheduleReducer,
    histories: historyReducer
})

export default reducer