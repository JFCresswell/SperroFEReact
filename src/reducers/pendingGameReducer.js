import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function pendingGamesReducer(state = initialState.games, action) {
  switch (action.type) {
    case types.LOAD_PENDING_GAMES_SUCCESS:
      return action.games;

    case types.CREATE_PENDING_GAMES_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.games)
      ];

    case types.UPDATE_PENDING_GAMES_SUCCESS:
      return [
        ...state.filter(game => game.Id !== action.game.Id),
        Object.assign({}, action.game)
      ];

    default:
      return state;
  }
}
