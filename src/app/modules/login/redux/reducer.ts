import { LoginActions } from './actions/login';
import { AppStateLogin } from 'src/app/redux/interfaces/app-state-login';

export const INITIAL_STATE: AppStateLogin = {
  logged : false,
  email : null,
  token : null
};