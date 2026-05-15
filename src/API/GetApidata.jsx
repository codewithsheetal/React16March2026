import React from 'react'
import { useEffect } from 'react'
import { fetchUsers } from './api'
import { useState } from 'react'

function GetApidata() {
    const [user,setUser]=useState([]);

    useEffect(() => {
        const getuser = async () => {
            try {
                const data = await fetchUsers();
                console.log(data);
                setUser(data)
            }
            catch (error) {
                console.log("error");

            }
        }
        getuser();
    }, [])
    return (
        <>
            hello
            <ul>
                {user.map((u)=>(
                    <li key={u.id}>{u.name}-{u.email}</li>
                ))}
            </ul>
        </>
    )
}

export default GetApidata
