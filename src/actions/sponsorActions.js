/**
 * Created by John on 8/14/2016.
 */
import SponsorApi from '../api/mockSponsorApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadSponsorsSuccess(sponsors) {
  return {type: types.LOAD_SPONSORS_SUCCESS, sponsors};
}

export function createSponsorSuccess(sponsor) {
  return {type: types.CREATE_SPONSOR_SUCCESS, sponsor};
}

export function updateSponsorSuccess(sponsor) {
  return {type: types.UPDATE_SPONSOR_SUCCESS, sponsor};
}

export function loadSponsors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return SponsorApi.getAllSponsors().then(sponsors => {
      dispatch(loadSponsorsSuccess(sponsors));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveSponsor(sponsor) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return SponsorApi.saveSponsor(sponsor).then(sponsor => {
      sponsor.Id ? dispatch(updateSponsorSuccess(sponsor)) :
        dispatch(createSponsorSuccess(sponsor));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

