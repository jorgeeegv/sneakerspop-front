import { BrandActions } from './actions/brand'
import { AppStateBrands } from 'src/app/redux/interfaces/app-state-brands';
import { immutableState } from 'src/app/shared/utils';

export const INITIAL_STATE: AppStateBrands = {
    list : null,
    selectedBrand : null
};

export const BrandReducer = (state = INITIAL_STATE, action: any): AppStateBrands => {
  switch (action.type) {
    case BrandActions.BRAND_NEW :
      return immutableState(state, action.payload);
    default:
      return state;
  }
};