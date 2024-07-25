import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import { iceCreamREducer } from "./iceCream/iceCreamREducer";

export const rootReducer = combineReducers(
    {
        cake: cakeReducer,
        iceCream : iceCreamREducer,
    }
)