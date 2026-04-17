import React, { useReducer, useState } from 'react'
import CounterReducer, { initialState } from './CounterReducer'

function CounterAppUI() {
    const [value,setValue]= useState(0)
    const [state,dispatch]= useReducer(CounterReducer,initialState)
    return (
        <>
        <h1>count: {state.count} </h1>
        <h2>label : {state.label} </h2>
        <button onClick={()=>dispatch({type:"INC"})}>Inc </button>
        <button onClick={()=>dispatch({type:"DEC"})}>Dec</button>
        {/* <button onClick={()=>dispatch({type:"INC_BY_5"})}>Inc by 5 </button> */}
        <input type="text" value={value} onChange={(e)=>setValue(Number(e.target.value))}/>

        <button onClick={()=>dispatch({type:"INC_BY_Random", payload: value })}>Inc by Random</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
        </>
    )
}

export default CounterAppUI
