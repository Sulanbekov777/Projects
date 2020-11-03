import React, { useState } from 'react';
import {connect} from 'react-redux';
import {
    addNewTodo
} from '../redux/actions'
import { useCustomFetch } from '../helpers/customFetch';
import {url} from '../helpers/url'
import Axios from 'axios';



function Form(props) {
    const [value, setValue] = useState("")

    function addToDo(e) {
    //     if(value !== ''){
    //         e.preventDefault()
    //         const{}=useCustomFetch({
    //             method: 'POST',
    //            url: url+'/posts', 
    //            header: {"content-type": "application/json"},
    //            data: value
    //         })
    // }
    const data = {
        id: new Date.now(),
        title: 'new task'
    }

    async function addData(){
        const response = Axios.post(url+'/posts', data)
        console.log(response)
    }

    addData()


        }

    // function fetchTodos(e){
    //     e.preventDefault()
    //     props.getTodos()
    // }
    return (
        <div>
            <form >
                <div className="form-group d-flex">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Введите название заметки"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button  className="btn btn-primary" type="submit">Создать</button>
                </div>

            </form>
        </div>
    )
}

// const mapDispatchToProps = ()=>{
//     return {getTodos}
// }

export default connect(null, {addNewTodo,})(Form);