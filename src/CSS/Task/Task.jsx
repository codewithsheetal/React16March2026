import React, { useState } from 'react'
import './Task.css'

function Task() {
    const [login , setLogin]=useState("login")
    const [reg , setReg]=useState(false)
    return (
        <>                            
        <button onClick={()=>setLogin(login =='login' ? 'logout' : 'login')} className={login === 'login' ? 'active' : 'inactive'}>
            {login}
        </button>

        <button onClick={()=>setReg(!reg)} className={reg ? "active" : "inactive"}>
            {reg ? "logout": "Registration"}
        </button>

        </>
    )
}

export default Task
