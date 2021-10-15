import { INCREMENT_COUNTER } from "../keys";

const initialState = {
    counter : 0,
}

function reducer(state = initialState, action){
    switch (action.type){
        case INCREMENT_COUNTER:
            return {...state, counter: state.counter + 1}
        default:
            return state
    }
}

export default reducer