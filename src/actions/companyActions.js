import CompanyApi from '../api/mockCompanyApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCompaniesSuccess(companies) {
  return {type: types.LOAD_COMPANIES_SUCCESS, companies};
}

export function loadCompanies() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return CompanyApi.getAllCompanies().then(companies => {
      dispatch(loadCompaniesSuccess(companies));
    }).catch(error => {
      throw(error);
    });
  };
}
