import delay from './delay';

const supported_games = [
  {
    Id: 1,
    Title: "Scotts folly",
    Description: "Mildly miffed birds"
  },
  {
    Id: 2,
    Title: "Collins catastrophe",
    Description: "Murder and Mayhem"
  },
  {
    Id: 3,
    Title: "Johns conundrums",
    Description: "puzzle package"
  }
];

class SupportedGameApi {
  static getAllSupportedGames() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], supported_games));
      }, delay);
    });
  }
}

export default SupportedGameApi;
