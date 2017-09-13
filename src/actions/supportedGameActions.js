import * as types from './actionTypes';
import SupportedGameApi from '../api/mockSupportedGameApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadSupportedGamesSuccess(supportedGames) {
  return { type: types.LOAD_SUPPORTED_GAMES_SUCCESS, supportedGames};
}

export function loadSupportedGames() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return SupportedGameApi.getAllSupportedGames().then(supportedGames => {
      dispatch(loadSupportedGamesSuccess(supportedGames));
    }).catch(error => {
      throw(error);
    });
  };
}
