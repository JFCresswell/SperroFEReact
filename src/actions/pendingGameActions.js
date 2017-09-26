import * as types from './actionTypes';
import PendingGameApi from '../api/mockPendingGameApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadPendingGamesSuccess(pendingGames) {
  return { type: types.LOAD_PENDING_GAMES_SUCCESS, pendingGames};
}

export function decidePendingGameSuccess(pendingGame) {
  return {type: types.DECIDE_PENDING_GAME_SUCCESS, pendingGame};
}

export function loadPendingGames() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return PendingGameApi.getAllPendingGames().then(pendingGames => {
      dispatch(loadPendingGamesSuccess(pendingGames));
    }).catch(error => {
      throw(error);
    });
  };
}

export function decidePendingGame(pendingGame) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
     return PendingGameApi.decide(pendingGame).then(pendingGame => {
        dispatch(decidePendingGameSuccess(pendingGame));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
