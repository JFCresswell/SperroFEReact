import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const sponsors = [
  {
    Id: 1,
    CompanyName: 'Kansas City Chiefs',
    Business: 'Sports'
  },
  {
    Id: 2,
    CompanyName: 'Verizon',
    Business: 'Telecommunications'
  },
  {
    Id: 3,
    CompanyName: 'A.B. May',
    Business: 'Repair Services'
  },
  {
    Id: 4,
    CompanyName: 'Ryan Tree and Yard',
    Business: 'Yard Maintenance'
  }
];

const generateId = () => {
  let id = 0;
  for (let idx = 0; idx < sponsors.length; idx++) {
    if (sponsors[idx].Id > id) {
      id = sponsors[idx].Id;
    }
  }
  return id + 1;
};

class SponsorApi {
  static getAllSponsors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], sponsors));
      }, delay);
    });
  }

  static saveSponsor(sponsor) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minSponsorNameLength = 3;
        if (sponsor.companyName.length < minSponsorNameLength) {
          reject(`Name must be at least ${minSponsorNameLength} characters.`);
        }

        if (sponsor.Id) {
          const existingSponsorIndex = sponsors.findIndex(s => s.Id == sponsor.Id);
          sponsors.splice(existingSponsorIndex, 1, sponsor);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          sponsor.Id = generateId(sponsor);
          sponsors.push(sponsor);
        }

        resolve(Object.assign({}, sponsor));
      }, delay);
    });
  }

  static deleteSponsor(sponsorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfSponsorToDelete = sponsors.findIndex(sponsor => {
          sponsor.Id == sponsorId;
        });
        sponsors.splice(indexOfSponsorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default SponsorApi;
