import {  
    SET_PATIENT_DATA, 
    SET_PATIENT_ERROR_LOGIN, 
    SET_PATIENT_LOADING_LOGIN, 
    REGISTER_PATIENT, 

    SET_PATIENT_ERROR_REGISTER, 
    SET_PATIENT_LOADING_REGISTER, 
    SET_SCHEDULE_DATA,
    SET_SCHEDULE_LOADING,
    SET_SCHEDULE_ERROR
} from "../keys";
import http from '../../libs/patients'
import httpSchedule from '../../libs/schedule'

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
            console.log(err.response.data, '======================================')
            dispatch(setErrorSchedule(err.response.data))
        }
    }
}

export { 
    loginAsync, 
    registerAsync,
    setErrorRegister,
    setErrorLogin,
    scheduleAsync
 }