import { BUY_ICECREAM } from "./iceCreamTypes"

export const initialIceCreamState = {
    numberOfIceCreams : 20,
}

export const iceCreamREducer = (state= initialIceCreamState, action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }
        default: return state
    }
}