import { LoginActions } from './actions/login';
import { AppStateLogin } from 'src/app/redux/interfaces/app-state-login';
import { immutableState } from 'src/app/shared/utils';

export const INITIAL_STATE: AppStateLogin = {
  logged : false,
  email : null,
  token : null
};

export const LoginReducer = (state = INITIAL_STATE, action: any): AppStateLogin => {
  switch (action.type) {
    case LoginActions.SET_USER :
      return immutableState(state, action.payload);
    default:
      return state;
  }
};