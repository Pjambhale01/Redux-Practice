export default function reducer(state={},action){
    switch(action.type){
        case "ADD_NAME":{
            const newState={...state,product:[...state.product,{Name:action.payload,Category:action.payloadtwo}]}
            return newState
        }
        case "ADD_NAME":{
            const newState={...state,data:[...state.data,action.payload]}
            return newState
        }
        default:
            return state
    }
}