import Action from './Action/action'
export default function userReducer(state = [], action) {
    switch (action.type) {
        case Action.ADD_USER: {
            const newState = [...state, action.payload] 
            return newState
        }

        case Action.Update_User: {
            return [...state.slice(0, action.payload.ind),action.payload.name,state.slice(1+ action.payload).ind]
            // const newState = { ...state, userDetails: [...state.userDetails.slice(0, action.payload.ind), action.payload.name, ...state.userDetails.slice(action.payload.ind + 1)] }
            // return newState
        }
        default:{
            return state
        }
    }
}
