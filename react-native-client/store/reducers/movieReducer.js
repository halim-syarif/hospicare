import { SET_MOVIES, SET_LOADING_MOVIES, SET_MOVIE_DETAIL, SET_MOVIE_DETAIL_LOADING, SET_MOVIE_NAME } from "../keys";

const initialState = {
    movies : [],
    isLoading : false,
    detail: '',
    isLoadingDetail: false,
    movieName : 'Inglorious Basterds',
    movieId : 1
}

function reducer(state = initialState, action){
    const { type, payload } = action
    switch (type){
        case SET_MOVIES:
            return {...state, movies : payload}
        case SET_LOADING_MOVIES:
            return {...state, isLoading : payload}
        case SET_MOVIE_DETAIL:
            return {...state, detail : payload}
        case SET_MOVIE_DETAIL_LOADING:
            return {...state, isLoadingDetail : payload}
        case SET_MOVIE_NAME: 
            return {...state, movieName : payload.name, movieId : payload.id}
        default:
            return state
    }
}

export default reducer