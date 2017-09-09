import * as types from './actionTypes';
import RegistrationApi from '../api/mockRegistrationApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadRegistrationSuccess(registration) {
  return { type: types.LOAD_REGISTRATION_SUCCESS, registration};
}

  export function createRegistrationSuccess(registration) {
  return {type: types.CREATE_REGISTRATION_SUCCESS, registration};
}

export function updateRegistrationSuccess(registration) {
  return {type: types.UPDATE_REGISTRATION_SUCCESS, registration};
}

export function loadRegistration() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return RegistrationApi.getRegistration().then(registration => {
      dispatch(loadRegistrationSuccess(registration));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveRegistration(registration) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return RegistrationApi.saveRegistration(registration).then(registration => {
      registration.Id ? dispatch(updateRegistrationSuccess(registration)) :
        dispatch(createRegistrationSuccess(registration));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
