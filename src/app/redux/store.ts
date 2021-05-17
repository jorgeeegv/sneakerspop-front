import { combineReducers } from "redux";
import { LoginReducer } from "../modules/login/redux/reducer";
import { SneakersReducer } from "../modules/sneakers/redux/reducer";
import { BrandReducer } from "../modules/brands/redux/reducer";
import { AppState } from "./interfaces/app-state";
import { ShopReducer } from "../modules/shops/redux/reducer";
import { RaffleReducer } from "../modules/raffles/redux/reducer";

export const mainReducer = combineReducers<AppState>({
    login : LoginReducer,
     sneakers : SneakersReducer,
     brands : BrandReducer,
     shops : ShopReducer,
     raffles : RaffleReducer
  });
  
export function rootReducer(state,action){
    return mainReducer(state, action);
}