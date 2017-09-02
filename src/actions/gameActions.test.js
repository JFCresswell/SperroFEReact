import expect from 'expect';
import * as gameActions from './gameActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Game Actions', () => {
  describe('createGameSuccess', () => {
    it('should create a CREATE_GAME_SUCCESS action', () => {
      //arrange
      const game = {Id: 1, Name: 'Test Game'};
      const expectedAction = {
        type: types.CREATE_GAME_SUCCESS,
        game: game
      };

      //act
      const action = gameActions.createGameSuccess(game);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_GAMES_SUCCESS when loading courses', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { game: [{ Id: 1, Name: 'Test Game' }] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_GAMES_SUCCESS, body: {games: [{Id: 1, Name: 'Test Game'}]}}
    ];

    const store = mockStore({games: []}, expectedActions);
    store.dispatch(gameActions.loadGames()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_GAMES_SUCCESS);
      done();
    });
  });
});
