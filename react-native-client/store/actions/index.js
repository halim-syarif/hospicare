import { 
    INCREMENT_COUNTER, 
    SET_LOADING_MOVIES, 
    SET_MOVIES, 
    SET_MOVIE_DETAIL, 
    SET_MOVIE_DETAIL_LOADING, 
    SET_MOVIE_NAME, 
    SET_PATIENT_DATA, 
    SET_PATIENT_ERROR_LOGIN, 
    SET_PATIENT_LOADING_LOGIN, 
    REGISTER_PATIENT, 
    SET_PATIENT_ERROR_REGISTER, 
    SET_PATIENT_LOADING_REGISTER 
} from "../keys";
import axios from 'axios'
import http from '../../libs/patients'

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
            console.log(patient.data, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
            dispatch(setLoadingRegister(false))
            dispatch(setErrorRegister(''))
            navigation.navigate('SignInScreen')
        } catch (err) {
            dispatch(setErrorRegister(err.response.data))
            dispatch(setLoadingRegister(false))
        }
    }
}

function incrementCounter(){
    return {
        type : INCREMENT_COUNTER
    }
}
function setMovies(movies){
    return {
        type : SET_MOVIES,
        payload : movies
    }
}

function setLoadingMovies(isloading){
    return {
        type : SET_LOADING_MOVIES,
        payload : isloading
    }
}

function setMoviesAsync(){
    return async function (dispatch){
        try {
            dispatch(setLoadingMovies(true))
            const movies = await axios({
                method : 'GET',
                url : 'http://10.0.2.2:3000/movies'
            })
            const data = movies.data
            dispatch(setMovies(data))
            dispatch(setLoadingMovies(false))
        } 
        catch (err) {
            console.log(err);
        }
      }
}

function setMovieName(id, name){
    return {
        type : SET_MOVIE_NAME,
        payload : {
            id, name
        }
    }
}

function setMovieDetail(movies){
    return {
        type : SET_MOVIE_DETAIL,
        payload : movies
    }
}

function setLoadingMovieDetail(isloading){
    return {
        type : SET_MOVIE_DETAIL_LOADING,
        payload : isloading
    }
}

function setMovieDetailAsync(id){
    return async function (dispatch){
        try {
            dispatch(setLoadingMovieDetail(true))
            const movie = await axios({
                method : 'GET',
                url : `http://10.0.2.2:3000/movies/${id}`
            })
            const data = movie.data
            dispatch(setMovieDetail(data))
            dispatch(setLoadingMovieDetail(false))
        } 
        catch (err) {
            console.log(err);
        }
      }
}
export { 
    loginAsync, 
    registerAsync,
    incrementCounter, 
    setMoviesAsync, 
    setMovies, 
    setMovieName, 
    setLoadingMovies, 
    setMovieDetail, 
    setLoadingMovieDetail, 
    setMovieDetailAsync
 }