const initialState = {
    medicines: [],
    isLoading: false,
    errorMessage: "",
    selectedMedicines: [],
    medicine: {},
    successMessage: ""
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "medicine/setMedicineData":
            return {...state, medicines: action.payload}
        case "medicine/setIsLoading":
            return {...state, isLoading: action.payload}
        case "medicine/setErrorMessage":
            return {...state, errorMessage: action.payload}
        case "medicine/deleteMedicine" :
            const filteredMedicines = state.medicines.rows.filter((medicine) => {
                return medicine.id !== action.payload
            })
            console.log(filteredMedicines);
            const newMedicines = {
                count : initialState.medicines.count - 1,
                rows : filteredMedicines
            }
            return {...state, medicines: newMedicines}
        case "medicine/editMedicine" : 
            return {...state, medicines: [action.payload]}
        case 'medicine/setSelectedMedicines':
            return {...state, selectedMedicines:  action.payload}
        case "medicine/fetchOneMedicine" :
            return {...state, medicine: action.payload}
        case "medicine/setEditMessage":
            return {...state, successMessage: action.payload}
        default:
            return state
    }
}