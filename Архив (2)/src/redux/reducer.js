import {combineReducers} from 'redux'
import TodoReducer from './todo/reducer'
import AlertReducer from './alert/reducer'


export const rootReducer = combineReducers({
    TodoReducer, 
    AlertReducer
})