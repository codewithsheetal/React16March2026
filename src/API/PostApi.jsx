import React from 'react'
import { useState } from 'react'
import { createUser } from './api';

function PostApi() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[msg,setMsg]=useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const newUser = await createUser({name,email});
            console.log(newUser);
            setMsg("user Added");
            
        }
        catch(error){
            console.log("error");
            setMsg("Failed to add")
            
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <br /><br />

            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br /><br />
            <button type="submit">add user</button>
        </form>
        {msg && <p>{msg}</p>}
        </>
    )
}

export default PostApi
