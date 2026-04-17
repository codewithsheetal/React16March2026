import React, { useReducer } from 'react'
import InputReducer, { initialState } from './InputReducer'

function InputForm() {
    const [state ,dispatch]= useReducer(InputReducer, initialState)
    return (
        <>
        name:{state.name}
        <br />
        email: {state.email}
        <br />
        <input type="text"  name="name" value={state.name} onChange={
            (e)=>dispatch({
                type:"Submit_Form",
                field : e.target.name,  
                value:e.target.value
            })
        }/>
        <input type="email" name='email' value={state.email}   onChange={
            (e)=>dispatch({
                type:"Submit_Form",
                field : e.target.name,  
                value:e.target.value
            })
        }/>
        </>
    )
}

export default InputForm
