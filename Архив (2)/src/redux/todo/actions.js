import axios from 'axios';
import {url} from './../../helpers/url'
import {
    ADD_NEW_TODO, 
    GET_TODOS
} from './constants'


export const getTodos = (data)=>{
    return {
        type: GET_TODOS,
        payload: data
    }
}

// export async function getData(){
//     const result = axios.get(`${url}/posts`)
//     const payload = result.data
//     await getTodos(payload)
// }

export const addNewTodo = (newTodo)=>(
    {
        type: ADD_NEW_TODO,
        payload: newTodo
    }
)



