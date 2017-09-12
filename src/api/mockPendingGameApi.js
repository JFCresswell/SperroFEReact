import delay from './delay';

const pending_games = [
  {
    Id: 1,
    Title: "Enemies explode",
    Description: "Name kind of says it all",
    Category: "Walk through",
    Approved: 0
  },
  {
    Id: 2,
    Title: "Generic walkthrough",
    Description: "100 hours wandering around landscape",
    Category: "Walk through",
    Approved: 1
  },
  {
    Id: 3,
    Title: "Road Race 3000",
    Description: "20 Formula 1 races",
    Category: "racing",
    Approved: 2
  }
];

class PendingGameApi {
  static getAllPendingGames() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], pending_games));
      }, delay);
    });
  }
}

export default PendingGameApi;
