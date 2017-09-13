import * as types from './actionTypes';
import PendingGameApi from '../api/mockPendingGameApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadPendingGamesSuccess(pendingGames) {
  return { type: types.LOAD_PENDING_GAMES_SUCCESS, pendingGames};
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
