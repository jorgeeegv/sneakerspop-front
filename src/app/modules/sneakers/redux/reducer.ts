import { AppStateSneakers } from "src/app/redux/interfaces/app-state-sneakers";
import { immutableState } from "src/app/shared/utils";
import { sneakersActions } from "./actions/sneakerActions";

export const INITIAL_STATE: AppStateSneakers = {
    list : null,
    selectedSneaker: null
}
export const SneakersReducer = (state = INITIAL_STATE, action: any): AppStateSneakers => {
    switch (action.type) {
        case sneakersActions.CREATE_SNEAKER :
        case sneakersActions.GET_SNEAKERS :
        case sneakersActions.FIND_SNEAKER :
      case sneakersActions.CLEAR_SNEAKER :
          return immutableState(state, action.payload);
        default:
          return state;
      }
}