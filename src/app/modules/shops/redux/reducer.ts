import { ShopActions } from './actions/shop';
import { AppStateLogin } from 'src/app/redux/interfaces/app-state-login';
import { immutableState } from 'src/app/shared/utils';
import { AppStateShops } from 'src/app/redux/interfaces/app-state-shops';

export const INITIAL_STATE: AppStateShops = {
 list : null,
 selectedShop : null
};

export const ShopReducer = (state = INITIAL_STATE, action: any): AppStateShops => {
  switch (action.type) {
    case ShopActions.SET_SHOP :
    case ShopActions.FIND_SHOPS:
      return immutableState(state, action.payload);
    default:
      return state;
  }
};