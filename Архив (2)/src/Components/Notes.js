import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getTodos, showAlert, } from '../redux/actions';
import {useCustomFetch, } from '../helpers/customFetch';
import {url} from '../helpers/url'

import axios from 'axios';
import Axios from 'axios';

function Notes(props) {
        const {data, loading, error} = useCustomFetch({
            url: url + "/posts"
        })

        useEffect(()=>{
            if(data)props.getTodos(data)
        }, [data])  

        // console.log(data, loading, error)
        
        function delData(id){
            async function deleteToDo(id){
                const res = await Axios.delete(`${url}/posts/${id}`)
                console.log(res, id)
            }
            deleteToDo(id)  

        }

    return (
        <div className="list-group"> 
        {/* {console.log(props.todos.data)} */}
         

            {props.todos.data ? props.todos.data.map(note =>(
                <li key={note.id} className="list-group-item d-flex justify-content-between">
                    <input className= "w-50">"</input>
                    <p>{note.id +1} {note.title}</p>
                    <div>
                    <button className="btn btn-danger btn-sm" onClick={()=>setImmediate}></button>
                    <button className="btn btn-danger btn-sm" onClick={()=>delData(note.id)}>&times;</button>
                    </div>
                    
                </li>
            )): <p>Что-то пошло не так</p>}

        
        </div>
    )
}

const mapStateToProps =(state)=>{
    let{todos} = state.TodoReducer
    return {todos}
}

// const mapDispatchToProps = (dispatch)=>{

//     return {
//         getTodos: (data)=>dispatch(getTodos(data))
//     }
// }

export default connect(mapStateToProps, {getTodos, showAlert})(Notes);
