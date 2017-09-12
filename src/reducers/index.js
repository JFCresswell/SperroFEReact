import {combineReducers} from 'redux';
import games from './gameReducer';
import companies from './companyReducer';
import prizes from './prizeReducer';
import sponsors from './sponsorReducer';
import pendingGames from './pendingGameReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  games,
  companies,
  prizes,
  sponsors,
  pendingGames,
  ajaxCallsInProgress
});

export default rootReducer;
