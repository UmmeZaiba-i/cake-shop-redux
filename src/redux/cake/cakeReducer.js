import { BUY_CAKE } from "./cakeTypes"

const intialState = {
    numberOfCakes:10,
}

export const cakeReducer=(state=intialState, action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload
            }
        default: return state
    }
}