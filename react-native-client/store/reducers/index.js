import { combineReducers } from "redux";
import patientReducer from './patientReducer'
import scheduleReducer from './scheduleReducer'
import historyReducer from './historyReducer'
import bookingReducer from './bookingReducers'
import doctorReducer from './doctorReducer'
import medicineReducer from "./medicineReducer"

const reducer = combineReducers({
    patients: patientReducer,
    schedules: scheduleReducer,
    histories: historyReducer,
    booking: bookingReducer,
    doctors: doctorReducer,
    medicines: medicineReducer
})

export default reducer