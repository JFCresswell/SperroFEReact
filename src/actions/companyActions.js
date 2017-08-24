import CompanyApi from '../api/mockCompanyApi';
import * as types from './actionTypes';

export function loadCompaniesSuccess(companies) {
  return {type: types.LOAD_COMPANIES_SUCCESS, companies};
}

export function loadCompanies() {
  return dispatch => {
    return CompanyApi.getAllCompanies().then(companies => {
      dispatch(loadCompaniesSuccess(companies));
    }).catch(error => {
      throw(error);
    });
  };
}
