import React, { useEffect, useState } from 'react'
import { deleteUser, fetchUsers } from './api';
import UpdateForm from './UpdateForm';

function APIdata() {
    const [user, setUser] = useState([]);
    const [msg, setMsg] = useState("");
    const [selectedUser,setSelectedUser]=useState()

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

    const handleDelete = async (id) => {
        // console.log(id);
        try {
            await deleteUser(id)
            setUser((prev) => prev.filter((u) => u.id !== id))
            setMsg("User Deleted!!")

            setTimeout(()=>{
                setMsg("")
            },3000)

        }
        catch (error) {
            console.log(error);
            setMsg("OOPS!!")
        }

    }
    const handleUpdate = (newupdate)=>{
        setUser((prev)=>prev.map((u)=>u.id ===newupdate.id ? newupdate :u))
        setSelectedUser("")
        setMsg("User Updated!!")
    }
    return (
        <>
            hello
            <ul>
                {user.map((u) => (
                    <li key={u.id} onClick={()=>setSelectedUser(u)}>
                        {u.name}-{u.email}
                        <button onClick={() => handleDelete(u.id)}> delete</button>
                    </li>
                ))}
            </ul>
            {selectedUser && <UpdateForm user ={selectedUser} onUpdate ={handleUpdate}/>}
            {msg && <p>{msg}</p>}
        </>
    )
}


export default APIdata
