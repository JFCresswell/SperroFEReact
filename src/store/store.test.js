import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as gameActions from '../actions/gameActions';

describe('Store', function() {
  it('Should handle creating games', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const game = {
      Name: "Test Game"
    };

    // act
    const action = gameActions.createGameSuccess(game);
    store.dispatch(action);

    // assert
    const actual = store.getState().games[0];
    const expected = {
      Name: "Test Game"
    };

    expect(actual).toEqual(expected);
  });
});
