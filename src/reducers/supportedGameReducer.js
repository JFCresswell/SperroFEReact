import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function supportedGamesReducer(state = initialState.supportedGames, action) {
  switch (action.type) {
    case types.LOAD_SUPPORTED_GAMES_SUCCESS:
      return action.supportedGames;

    case types.CREATE_SUPPORTED_GAMES_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.supportedGames)
      ];

    case types.UPDATE_SUPPORTED_GAMES_SUCCESS:
      return [
        ...state.filter(supportedGame => supportedGame.Id !== action.supportedGame.Id),
        Object.assign({}, action.supportedGame)
      ];

    default:
      return state;
  }
}
