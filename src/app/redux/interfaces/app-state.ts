import { AppStateBrands } from "./app-state-brands";
import { AppStateLogin } from "./app-state-login";
import { AppStateRaffles } from "./app-state-raffles";
import { AppStateShops } from "./app-state-shops";
import { AppStateSneakers } from "./app-state-sneakers";

export interface AppState {
    login : AppStateLogin,
    sneakers : AppStateSneakers,
    brands : AppStateBrands,
    shops : AppStateShops,
    raffles : AppStateRaffles
}