export const initialState= {
    name:"",  // name: sheetal
    email:"" // email:x@x.com
}

function InputReducer (state, action){

    switch(action.type){

        case "Submit_Form":
            return {
                ...state,
               [action.field]:action.value 
            }
        
        default :
            return state;
    }

}

export default InputReducer;