import delay from './delay';

// All calls return promises.
const prizes = [
  {
    Id: 1,
    Name: 'Chiefs tickets',
    Description: 'tickets on 40 yard line'
  },
  {
    Id: 2,
    Name: 'Washer',
    Description: 'new washing machine'
  },
  {
    Id: 3,
    Name: 'Yard work',
    Description: '5 hours of yard work'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  let newId = 1;

  prizes.forEach((value) => newId = value.Id >= newId ? value.Id + 1 : newId);

  return newId;
};

class PrizeApi {
  static getAllPrizes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], prizes));
      }, delay);
    });
  }

  static savePrize(prize) {
	prize = Object.assign({}, prize); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minPrizeNameLength = 3;
        if (prize.Name.length < minPrizeNameLength) {
          reject(`First Name must be at least ${minPrizeNameLength} characters.`);
        }

        if (prize.Id) {
          const existingPrizeIndex = prizes.findIndex(p => p.Id === prize.Id);
          prizes.splice(existingPrizeIndex, 1, prize);
        } else {
          prize.Id = generateId(prize);
          prizes.push(prize);
        }

        resolve(prize);
      }, delay);
    });
  }

  static deleteprize(prizeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfPrizeToDelete = prizes.findIndex(prize => {
          prize.Id == prizeId;
        });
        prizes.splice(indexOfPrizeToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default PrizeApi;
