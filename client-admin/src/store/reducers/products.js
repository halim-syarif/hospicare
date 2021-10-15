const initialState = {
    isLoading: false,
    deleteLoading: false,
    isError: false,
    errorMessage: '',
    products: [],
    productById: {}
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'products/fetchProduct':
            return {...state, products: action.payload}
        case 'products/setProductById':
            return {...state, productById: action.payload}
        case 'products/setLoading':
            return {...state, isLoading: action.payload}
            case 'products/setDeleteLoading':
                return {...state, deleteLoading: action.payload}
        case 'products/setIsError':
            return {...state, isError: action.payload}
        case 'products/setErrorMessage':
            return {...state, errorMessage: action.payload}
        default: 
            return state
    }
}