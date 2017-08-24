import {combineReducers} from 'redux';
import games from './gameReducer';
import companies from './companyReducer';

const rootReducer = combineReducers({
  games,
  companies
});

export default rootReducer;
