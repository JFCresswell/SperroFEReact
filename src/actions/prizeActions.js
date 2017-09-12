import * as types from './actionTypes';
import PrizeApi from '../api/mockPrizeApi';
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
    return PrizeApi.getAllPrizes().then(prizes => {
      dispatch(loadPrizesSuccess(prizes));
    }).catch(error => {
      throw(error);
    });
  };
}

export function savePrize(prize) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return PrizeApi.savePrize(prize).then(prize => {
      prize.Id ? dispatch(updatePrizeSuccess(prize)) :
        dispatch(createPrizeSuccess(prize));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
