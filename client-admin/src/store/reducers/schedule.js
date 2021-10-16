const initialState = {
    isLoading: false,
    errorMessage: '',
    poli: [],
    schedules: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'schedule/setLoading':
            return {...state, isLoading: action.payload}
        case 'schedule/setErrorMessage':
            return {...state, errorMessage: action.payload}
        case 'schedule/setPoli':
            return {...state, poli: action.payload}
        case 'schedule/setSchedules':
            return {...state, schedules: action.payload}
        default: 
            return state
    }
}