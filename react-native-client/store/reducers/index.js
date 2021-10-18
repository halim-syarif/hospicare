import { combineReducers } from "redux";
import patientReducer from './patientReducer'
import scheduleReducer from './scheduleReducer'
import bookingReducer from './bookingReducers'

const reducer = combineReducers({
    patients: patientReducer,
    schedules: scheduleReducer,
    booking: bookingReducer
})

export default reducer