import { AppStateSneakers } from "src/app/redux/interfaces/app-state-sneakers";

export const INITIAL_STATE: AppStateSneakers = {
    list : null,
    selectedSneaker: null
}
// export const SneakersReducer = (state = INITIAL_STATE, action: any): AppStateSneakers {
//     // switch (action.type) {
//     //     case OrdersActions.GET_ORDER_LIST:
//     //     case OrdersActions.SET_SELECTED_ORDER:
//     //     case OrdersActions.SET_SELECTED_ORDER_HISTORY:
//     //     case OrdersActions.CLEAR_ORDER:
//     //     case OrdersActions.SET_DETAIL_SIDEMENU:
//     //     // case OrdersActions.START_REKOGNITION:
//     //     // case OrdersActions.SEND_DELIVERY_NOTE:
//     //     // case OrdersActions.ASSIGN_SEAL:
//     //     // case OrdersActions.CLEAR_OCR_RESPONSE:
//     //     case OrdersActions.SEARCH_DRIVERS:
//     //     case OrdersActions.CLEAR_SEARCH_DRIVERS:
//     //     case OrdersActions.CLEAR_ORDER_LIST:
//     //     case OrdersActions.SET_REQUIRED_ACTIONS:
//     //     case OrdersActions.SET_REQUIRED_ACTION_STATUS:
//     //       return immutableState(state, action.payload);
//     //     default:
//     //       return state;
//     //   }
// }

export const immutableState = (...sources) => {
    return Object.assign.apply(Object, [{}].concat(sources));
  };