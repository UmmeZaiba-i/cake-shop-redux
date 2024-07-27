import { BUY_CAKE } from "./cakeTypes"

// action creator - function returns an object
export const buyCake = (number=1)=>{
    return{
        type: BUY_CAKE,
        payload:number,
    }
}

