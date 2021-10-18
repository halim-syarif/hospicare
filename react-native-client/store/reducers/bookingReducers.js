import { 
    SET_BOOKING_DATE,
    SET_BOOKING_DOCTOR_SCHEDULE_ID,
    SET_BOOKING_ERROR,
    SET_BOOKING_LOADING
} from "../keys";

const initialState = {
    errorBooking: '',
    loadingBooking: '',
    doctorScheduleId: 0,
    bookingDate: 0
}

function reducer(state = initialState, action){
    const { type, payload } = action
    switch (type){
        case SET_BOOKING_ERROR:
            return {...state, errorBooking : payload}
        case SET_BOOKING_LOADING:
            return {...state, loadingBooking : payload}
        case SET_BOOKING_DOCTOR_SCHEDULE_ID:
            return {...state, doctorScheduleId: payload}
        case SET_BOOKING_DATE:
            return {...state, bookingDate: payload}
        default:
            return state
    }
}

export default reducer