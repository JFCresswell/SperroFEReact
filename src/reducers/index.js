import {combineReducers} from 'redux';
import games from './gameReducer';
import companies from './companyReducer';
import prizes from './prizeReducer';
import sponsors from './sponsorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  games,
  companies,
  prizes,
  sponsors,
  ajaxCallsInProgress
});

export default rootReducer;
