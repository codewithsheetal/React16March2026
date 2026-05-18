import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000/",
    timeout:5000,
    headers:{
        "Content-Type": "application/json"
    },
})

//get request 

export const fetchUsers = async ()=>{
    try{
        const response = await api.get("/users")
        return response.data 
    }
    catch(error){
        throw error;
    }
}

//post request 

export const createUser = async (user)=>{
    try{
        const response = await api.post("/users",user)
        return response.data;
    }
    catch(error){
        throw error;
    }
}

// delete api 
// 1) display data from Api 
// 2)delete button 
// 3) selected used id
// 4) delete data from api 
// 5) UI update

//delete request 
export const deleteUser = async (id)=>{
    try{
        const response = await api.delete(`/users/${id}`)
        return response.data;
    }
    catch(error){
        throw error
    }
}

// Update API 
// 1) display data from api 
// 2) onClick open update form 
// 3) auto fill (selected user) 
// 4) data update in api 
// 5) UI update

export const updateUser = async (id,updatedUser)=>{
    try{
        const response = await api.put(`/users/${id}`,updatedUser)
        return response.data
    }
    catch(error){
        throw error
    }
}