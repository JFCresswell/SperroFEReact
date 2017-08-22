import * as types from './actionTypes';
import gameApi from '../api/mockGameApi';

export function loadGamesSuccess(games) {
  return { type: types.LOAD_GAMES_SUCCESS, games };
}

export function loadGames() {
  return function(dispatch) {
    return gameApi.getAllGames().then(games => {
      dispatch(loadGamesSuccess(games));
    }).catch(error => {
      throw(error);
    });
  };
}
