import { combineReducers } from "redux";
import patientReducer from './patientReducer'
import scheduleReducer from './scheduleReducer'
import historyReducer from './historyReducer'
import bookingReducer from './bookingReducers'

const reducer = combineReducers({
    patients: patientReducer,
    schedules: scheduleReducer,
    histories: historyReducer,
    booking: bookingReducer
})

export default reducer