import { 
    SET_SCHEDULE_DATA,
    SET_SCHEDULE_ERROR,
    SET_SCHEDULE_LOADING,
    SET_SCHDULE_QUERY_DOCTOR_NAME
} from "../keys";

const initialState = {
    data: '',
    errorSchedule: '',
    loadingSchedule: false,
    queryDoctorName: ''
}

function reducer(state = initialState, action){
    const { type, payload } = action
    switch (type){
        case SET_SCHEDULE_DATA:
            return {...state, data: payload}
        case SET_SCHEDULE_ERROR:
            return {...state, errorSchedule: payload.message || payload}
        case SET_SCHEDULE_LOADING:
            return {...state, loadingSchedule: payload}
        case SET_SCHDULE_QUERY_DOCTOR_NAME:
            return {...state, queryDoctorName: payload}
        default:
            return state
    }
}

export default reducer