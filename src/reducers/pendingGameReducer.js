import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function pendingGamesReducer(state = initialState.games, action) {
  switch (action.type) {
    case types.LOAD_PENDING_GAMES_SUCCESS:
      return action.pendingGames;

    case types.CREATE_PENDING_GAMES_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.pendingGames)
      ];

    case types.UPDATE_PENDING_GAMES_SUCCESS:
      return [
        ...state.filter(pendingGame => pendingGame.Id !== action.pendingGame.Id),
        Object.assign({}, action.pendingGame)
      ];

    default:
      return state;
  }
}
