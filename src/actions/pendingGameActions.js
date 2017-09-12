import * as types from './actionTypes';
import pendingGameApi from '../api/mockPendingGameApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadPendingGamesSuccess(games) {
  return { type: types.LOAD_PENDING_GAMES_SUCCESS, games};
}

export function loadPendingGames() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return PendingGameApi.getAllPendingGames().then(games => {
      dispatch(loadPendingGamesSuccess(games));
    }).catch(error => {
      throw(error);
    });
  };
}
