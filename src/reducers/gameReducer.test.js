import expect from 'expect';
import gameReducer from './gameReducer';
import * as actions from '../actions/gameActions';

describe('Game Reducer', () => {
  it('should add game when passed CREATE_GAME_SUCCESS', () => {
    // arrange
    const initialState = [
      {Name: 'A'},
      {Name: 'B'}
    ];

    const newGame = {Name: 'C'};

    const action = actions.createGameSuccess(newGame);

    //act
    const newState = gameReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].Name).toEqual('A');
    expect(newState[1].Name).toEqual('B');
    expect(newState[2].Name).toEqual('C');
  });

});
