import { combineReducers } from "redux";
import movieReducer from './movieReducer'
import counterReducer from './counterReducer'
import patientReducer from './patientReducer'

const reducer = combineReducers({
    counter : counterReducer,
    movies : movieReducer,
    patients: patientReducer
})

export default reducer