// import { combineReducers } from 'redux'
// import commentReducer from '../commentReducer'
// import usercallReducer from '../usercallReducer'
// import userReducer from '../userReducer'

// export default combineReducers({

//     //commentDetails:commentReducer,
//     userDetails:userReducer,
//     //usersCall:usercallReducer

// })

function reducer( state={},action){
    switch(action.type){
        case 'ADD_USER' : {
           const newState = {...state,userDetails:[...state.userDetails,action.payload]}
           return newState
        }
        case 'UPDATE_USER' :{
            const newState = {...state,userDetails:[...state.userDetails.slice(0,action.payload.ind),action.payload.name,...state.userDetails.slice(1 +action.payload.ind)]}
            return newState
        }
        case 'ADD_Comment' :{
            const newState = {...state,commentDetails:action.payload}
            return newState
        }
        case 'UPDATE_COMMENT' : {
            let index = -1 ,{id} = action.payload
            state.commentDetails.find((item,ind) => {
                if (item.id == id){
                    index  = ind 
                }
            })
            return {...state,commentDetails:[...state.commentDetails.slice(0,index),action.payload,...state.commentDetails.slice(index + 1)]}

        }
        case 'UPDATE_CALL' : {
            const newState= {...state,usersCall:action.payload}
            return newState
        }
        case 'USER_call' : {
            let index = -1 ,{id} = action.payload
            state.usersCall.find((item,ind) =>{
                if (item.id = id ){
                    index =ind
                }
            })
            return {...state,usersCall:[...state.usersCall.slice(0,index),action.payload,...state.usersCall.slice(index + 1)]}
        }
        default:{
            return state
        }
    }
}
export default reducer