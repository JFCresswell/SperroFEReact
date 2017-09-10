import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function prizeReducer(state = initialState.prizes, action) {
  switch (action.type) {
    case types.LOAD_PRIZES_SUCCESS:
      return action.prizes;

    case types.CREATE_PRIZE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.prizes)
      ];

    case types.UPDATE_PRIZE_SUCCESS:
      return [
        ...state.filter(prize => prize.Id !== action.prize.Id),
        Object.assign({}, action.prize)
      ];

    default:
      return state;
  }
}
