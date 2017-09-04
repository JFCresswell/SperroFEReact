import * as types from './actionTypes';
import loginApi from '../api/loginApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loginAuthenticated() {
  return { type: types.LOGIN_AUTHENTICATED };
}

export function loginRefused() {
  return {type: types.LOGIN_REFUSED};
}
