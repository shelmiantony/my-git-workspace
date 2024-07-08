
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { BsPlus } from "react-icons/bs";
import {addTodo}  from '../../Redux/action'

function Todo (){
    const [todos,setTodos] = useState('')
    const dispatch = useDispatch();
    console.log("todos............>",todos)
    const handleChange = (e) =>{
setTodos(e.target.value)
    }
    const handleAdd = () => {
        if(todos.trim()){
dispatch(addTodo(todos))
        }
    }
    return(
        <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>

            <h2 className='mt-3 mb-6 text-3xl font-bold text-center uppercase'>PERSONAL TODO APP</h2>
            <div className='flex items-center mb-4'>
                <input value={todos} onChange={handleChange} type='text' name='addTodoInput' id='addTodoInput'placeholder='Add Todo'
                className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-300 '/>
                <button onClick={handleAdd}
                 className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'><BsPlus /></button>
            </div>
        </div>
    )
}
export default Todo;


