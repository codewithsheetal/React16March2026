export const initialState={
    count:0,
    label:"start count",
    // todos:[]
}

function CounterReducer(state,action){

    switch(action.type){
        case "INC": 
            return{
                count:state.count+1,
                label: "Incremented"
            }
        case "DEC":
            return{
                count:state.count-1,
                label: "Decremented"
            }
        // case "INC_BY_5":
        //     return{
        //         count:state.count+5,
        //         label: "inc by 5"
        //     }
            // }
        case "INC_BY_Random":
            return{
                count:state.count+ action.payload,
                label: "inc by random"
            }
        case "RESET":
            return{
                count:0,
                label:"Reset to 0"
            }
        default:
            return state;
    }

}
export default CounterReducer;