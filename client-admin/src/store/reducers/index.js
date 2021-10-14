import {combineReducers} from 'redux'
import userReducer from './users'
import productReducer from './products'


export const reducer = combineReducers({
    userState: userReducer,
    productState: productReducer
})
