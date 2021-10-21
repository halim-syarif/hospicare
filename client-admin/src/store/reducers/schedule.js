const initialState = {
    isLoading: false,
    errorMessage: '',
    poli: [],
    schedules: [],
    patients: [],
    antrian: [] // object {scheduleId, array of antrian}
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
        case 'schedule/setPatients':
            return {...state, patients: action.payload}
        case 'schedule/setAntrian':
            return {...state, antrian: action.payload}
        default: 
            return state
    }
}