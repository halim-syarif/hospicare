import {  
    SET_PATIENT_DATA, 
    SET_PATIENT_ERROR_LOGIN, 
    SET_PATIENT_LOADING_LOGIN, 
    REGISTER_PATIENT, 

    SET_PATIENT_ERROR_REGISTER, 
    SET_PATIENT_LOADING_REGISTER, 
    SET_SCHEDULE_DATA,
    SET_SCHEDULE_LOADING,
    SET_SCHEDULE_ERROR,
    SET_BOOKING_ERROR,
    SET_BOOKING_LOADING,
    SET_BOOKING_DATE,
    SET_BOOKING_DOCTOR_SCHEDULE_ID,
    DELETE_PATIENT_DATA,
    SET_LOADING_DOCTOR_NAMES,
    SET_ERROR_DOCTOR_NAMES,
    SET_DOCTORS_NAMES
} from "../keys";
import http from '../../libs/patients'
import httpSchedule from '../../libs/schedule'
import httpBooking from '../../libs/bookings'
import httpEmployee from '../../libs/employees'

function setPatientData(data){
    return {
        type: SET_PATIENT_DATA,
        payload: data
    }
}

function setErrorLogin(error){
    return {
        type: SET_PATIENT_ERROR_LOGIN,
        payload: error
    }
}

function setLoadingLogin(isLoading){
    return {
        type: SET_PATIENT_LOADING_LOGIN,
        payload: isLoading
    }
}

function deletePatientData(){
    return {
        type: DELETE_PATIENT_DATA
    }
}

function loginAsync(data){
    return async function (dispatch){
        try {
            dispatch(setLoadingLogin(true))
            const patient = await http({
                method: 'post',
                url: 'login',
                data
            })
            const result = patient.data
            dispatch(setPatientData(result))
            dispatch(setLoadingLogin(false))
        } catch (err) {
            dispatch(setErrorLogin(err.response.data))
            dispatch(setLoadingLogin(false))
        }
    }
}

function setErrorRegister(error){
    return {
        type: SET_PATIENT_ERROR_REGISTER,
        payload: error
    }
}

function setLoadingRegister(isLoading){
    return {
        type: SET_PATIENT_LOADING_REGISTER,
        payload: isLoading
    }
}

function registerAsync(data, navigation){
    return async function (dispatch){
        try {
            dispatch(setLoadingRegister(true))
            const patient = await http({
                method: 'post',
                data
            })
            dispatch(setLoadingRegister(false))
            dispatch(setErrorRegister(''))
            navigation.navigate('SignInScreen')
        } catch (err) {
            dispatch(setErrorRegister(err.response.data))
            dispatch(setLoadingRegister(false))
        }
    }
}

function setLoadingDoctorNames(isLoading){
    return {
        type: SET_LOADING_DOCTOR_NAMES,
        payload: isLoading
    }
}

function setErrorDoctorsName(error){
    return {
        type: SET_ERROR_DOCTOR_NAMES,
        payload: error
    }
}

function setDoctorNames(doctorNames){
    return {
        type: SET_DOCTORS_NAMES,
        payload: doctorNames
    }
}

function doctorNamesAsync(){
    return async function(dispatch){
        try {
            dispatch(setLoadingDoctorNames(true))
            const doctorNames = await httpEmployee()
            const arrayOfEmployees = doctorNames.data.rows
            const names = arrayOfEmployees.filter(el => el.role === 'Doctor').map(el => {
                return {
                    name: el.name,
                    id: el.id
                }
            })
            dispatch(setDoctorNames(names))
            dispatch(setLoadingDoctorNames(false))
        } catch (err) {
            dispatch(setErrorDoctorsName(err))
        }
    }
}

function setDataSchedule(schedule){
    return {
        type: SET_SCHEDULE_DATA,
        payload: schedule
    }
}

function setErrorSchedule(error){
    return {
        type: SET_SCHEDULE_ERROR,
        payload: error
    }
}

function setLoadingSchedule(isLoading){
    return {
        type: SET_SCHEDULE_LOADING,
        payload: isLoading
    }
}

function schedulesAsyncAll(){
    return async function(dispatch){
        try {
            dispatch(setLoadingSchedule(true))
            const schedule = await httpSchedule({
                method: 'get',
            })
            dispatch(setDataSchedule(schedule.data))
            dispatch(setLoadingSchedule(false))
        } catch (err) {
            dispatch(setErrorSchedule(err.response.data))
        }
    }
}

function scheduleAsync(poliid, dayid){
    return async function(dispatch){
        try {
            dispatch(setLoadingSchedule(true))
            const schedule = await httpSchedule({
                method: 'get',
                url: `${poliid}/${dayid}`,
            })
            dispatch(setDataSchedule(schedule.data))
            dispatch(setLoadingSchedule(false))
        } catch (err) {
            dispatch(setErrorSchedule(err.response.data))
        }
    }
}

function scheduleByDoctorName(doctorName){
    return async function(dispatch){
        try {
            dispatch(setLoadingSchedule(true))
            const schedule = await httpSchedule({
                method: 'get',
                url: `doctor/${doctorName}`
            })
            dispatch(setDataSchedule(schedule.data))
            dispatch(setLoadingSchedule(false))
        } catch (err) {
            dispatch(setErrorSchedule(err.response.data))
        }
    }
}

function setBookingDate(date){
    return {
        type: SET_BOOKING_DATE,
        payload: date
    }
}

function setDoctorScheduleId(id){
    return {
        type: SET_BOOKING_DOCTOR_SCHEDULE_ID,
        payload: id
    }
}

function setErrorBooking(error){
    return {
        type: SET_BOOKING_ERROR,
        payload: error
    }
}

function setLoadingBooking(isLoading){
    return {
        type: SET_BOOKING_LOADING,
        payload: isLoading
    }
}

function createBookingAsync(data){
    return async function(dispatch){
        try {
            dispatch(setLoadingBooking(true))
            const booking = await httpBooking({
                method: "post",
                data
            })
            dispatch(setLoadingBooking(false))
        } catch (err) {
            dispatch(setErrorBooking( err.response.message))
        }
    }
}


export { 
    loginAsync, 
    deletePatientData,
    registerAsync,
    setErrorRegister,
    setErrorLogin,
    doctorNamesAsync,
    schedulesAsyncAll,
    scheduleAsync,
    scheduleByDoctorName,
    setBookingDate,
    setErrorBooking,
    setDoctorScheduleId,
    createBookingAsync,
 }