import {combineReducers} from 'redux';
import games from './gameReducer';
import companies from './companyReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  games,
  companies,
  ajaxCallsInProgress
});

export default rootReducer;
