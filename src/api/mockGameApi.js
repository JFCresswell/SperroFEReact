import delay from './delay';

// All calls return promises.
const games = [
  {
    Id: 1,
    Name: 'Angry Birds',
    Description: 'Popular phone app',
    CompanyId: 2
  },
  {
    Id: 2,
    Name: 'Geographica',
    Description: 'Geography quiz',
    CompanyId: 1
  },
  {
    Id: 3,
    Name: 'Spider Solitaire',
    Description: 'Solitaire card game',
    CompanyId: 3
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  let newId = 1;

  games.forEach((value) => newId = value.Id >= newId ? value.Id + 1 : newId);

  return newId;
};

class GameApi {
  static getAllGames() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], games));
      }, delay);
    });
  }

  static saveGame(game) {
	game = Object.assign({}, game); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minGameNameLength = 3;
        if (game.Name.length < minGameNameLength) {
          reject(`First Name must be at least ${minGameNameLength} characters.`);
        }

        if (game.Id) {
          const existingGameIndex = games.findIndex(g => g.Id === game.id);
          games.splice(existingGameIndex, 1, game);
        } else {
          game.Id = generateId(game);
          games.push(game);
        }

        resolve(game);
      }, delay);
    });
  }

  static deleteGame(gameId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfGameToDelete = games.findIndex(game => {
          game.Id == gameId;
        });
        games.splice(indexOfGameToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default GameApi;
