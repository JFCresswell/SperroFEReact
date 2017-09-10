/**
 * Created by John on 8/14/2016.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sponsorReducer(state = initialState.sponsors, action) {
  switch (action.type) {
    case types.LOAD_SPONSORS_SUCCESS:
      return action.sponsors;

    default:
      return state;
  }
}
