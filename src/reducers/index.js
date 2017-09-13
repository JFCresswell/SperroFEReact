import {combineReducers} from 'redux';
import games from './gameReducer';
import companies from './companyReducer';
import prizes from './prizeReducer';
import sponsors from './sponsorReducer';
import pendingGames from './pendingGameReducer';
import supportedGames from './supportedGameReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  games,
  companies,
  prizes,
  sponsors,
  pendingGames,
  supportedGames,
  ajaxCallsInProgress
});

export default rootReducer;
