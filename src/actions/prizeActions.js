import * as types from './actionTypes';
import prizeApi from '../api/mockPrizeApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadPrizesSuccess(prizes) {
  return { type: types.LOAD_PRIZES_SUCCESS, prizes};
}

export function createPrizeSuccess(prize) {
  return {type: types.CREATE_PRIZE_SUCCESS, prize};
}

export function updatePrizeSuccess(prize) {
  return {type: types.UPDATE_PRIZE_SUCCESS, prize};
}

export function loadPrizes() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return prizeApi.getAllPrizes().then(prizes => {
      dispatch(loadPrizesSuccess(prizes));
    }).catch(error => {
      throw(error);
    });
  };
}

export function savePrize(prize) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return prizeApi.savePrize(prize).then(prize => {
      prize.id ? dispatch(updatePrizeSuccess(prize)) :
        dispatch(createPrizeSuccess(prize));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
