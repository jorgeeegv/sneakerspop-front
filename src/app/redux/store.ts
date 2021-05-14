import { combineReducers } from "redux";
import { LoginReducer } from "../modules/login/redux/reducer";
import { SneakersReducer } from "../modules/sneakers/redux/reducer";
import { AppState } from "./interfaces/app-state";

export const mainReducer = combineReducers<AppState>({
    login : LoginReducer,
     sneakers : SneakersReducer,
    // brands : AppStateBrands,
    // shops : AppStateShops,
    // raffles : AppStateRaffles
  });
  
export function rootReducer(state,action){
    return mainReducer(state, action);
}