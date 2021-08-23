import Action  from './Action/action'
export default function usercallReducer ( state =[],action){
    switch (action. type){
        case Action.UPDATE_CALL:{
            return action.payload
        }
        case Action.UPDATE_call:{
            let index = -1 ,{ id } =action.payload
            state.find((item,ind) => {
                if (item.id == id){
                    index =ind
                }
            })
            return [...state.slice(0,index),action.payload,...state.slice(0 +index)]
        }
    }
}