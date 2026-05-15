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