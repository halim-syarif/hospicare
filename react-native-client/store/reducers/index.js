import { combineReducers } from "redux";
import patientReducer from './patientReducer'
import scheduleReducer from './scheduleReducer'

const reducer = combineReducers({
    patients: patientReducer,
    schedules: scheduleReducer
})

export default reducer