import {ADD_NEW_TODO, GET_TODOS} from './constants';
 
const initialState = {
    todos: []
}

function TodoReducer(state = initialState, action){
    console.log(state, action)
    switch(action.type){
        case ADD_NEW_TODO:
            return state
        case GET_TODOS:
            
            return {...state, todos: action.payload}
            // return{...state, todos: [state.concat(action.payload)]} // Так тоже можно
        default:
            return state
    }
}

export default TodoReducer;