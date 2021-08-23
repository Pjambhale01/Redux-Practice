import Action from './Action/action'
export default function commentReducer(state = [], action) {
    switch (action.type) {
    case Action.ADD_COMMENT:{
        return action.payload
        // const newState = {...state,commentDetails:action.payload}
        // return newState
    }
    case Action.UPDATE_COMMENT :{
        
        let index = -1 ,{id} = action.payload
        state.find((item,ind) => {
            if (item.id == id){
                index = ind
            }
        })
        return[...state.slice(0,index),action.payload,...state.slice( index + 1)]
       // return {...state,commentDetails:[...state.commentDetails.slice(0,index),action.payload,...state.commentDetails.slice(0+index)]}

    }
  
    default:{
        return state
    }
 }
}
