import { RaffleActions } from './actions/raffle';
import { immutableState } from 'src/app/shared/utils';
import { AppStateRaffles } from 'src/app/redux/interfaces/app-state-raffles';

export const INITIAL_STATE: AppStateRaffles = {
 list : null,
 selectedRaffle : null
};

export const RaffleReducer = (state = INITIAL_STATE, action: any): AppStateRaffles => {
  switch (action.type) {
    case RaffleActions.SET_RAFFLE :
    case  RaffleActions.FIND_RAFFLES :
      return immutableState(state, action.payload);
    default:
      return state;
  }
};