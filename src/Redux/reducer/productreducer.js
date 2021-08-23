import { ActionType } from '../contants/action-types'
const initialsState = {
    products:[
        {
            id:1,
            title:'parmeshwar',
            category:'programer',
        },
    ],
};

export const productReducer = (state={},{type,payload}) => {
    switch(type) {
        case ActionType.SET_PRODUCTS:
            return state;
        default:
            return state    
    }
}