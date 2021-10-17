const initialState = {
    isLoading: false,
    errorMessage: '',
    medicines: [],
    selectedMedicines: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'medicine/setLoading':
            return {...state, isLoading: action.payload}
        case 'medicine/setErrorMessage':
            return {...state, errorMessage: action.payload}
        case 'medicine/setMedicine':
            return {...state, medicines: action.payload}
        case 'medicine/setSelectedMedicines':
            return {...state, selectedMedicines:  action.payload}
        default: 
            return state
    }
}