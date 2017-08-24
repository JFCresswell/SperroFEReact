import delay from './delay';

const companies = [
  {
    Id: 1,
    Name: 'Bethesda Softworks',
    Location: 'Bethesda, MD'
  },
  {
    Id: 2,
    Name: 'Electronic Arts',
    Location: 'Redwood City, CA'
  },
  {
    Id: 3,
    Name: 'Activision Blizzard',
    lastName: 'Santa Monica, CA'
  }
];

const generateId = () => {
  let newId = 1;

  companies.forEach((value) => newId = value.Id >= newId ? value.Id + 1 : newId);

  return newId;
};

class CompanyApi {
  static getAllCompanies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], companies));
      }, delay);
    });
  }

  static saveCompany(company) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCompanyNameLength = 3;
        if (company.Name.length < minCompanyNameLength) {
          reject(`First Name must be at least ${minCompanyNameLength} characters.`);
        }

        if (company.Name.length < minCompanyNameLength) {
          reject(`Last Name must be at least ${minCompanyNameLength} characters.`);
        }

        if (company.Id) {
          const existingCompanyIndex = companies.findIndex(c => c.Id == company.Id);
          companies.splice(existingCompanyIndex, 1, company);
        } else {
          company.Id = generateId();
          companies.push(company);
        }

        resolve(Object.assign({}, company));
      }, delay);
    });
  }

  static deleteCompany(companyId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCompanyToDelete = companies.findIndex(company => {
          company.Id === companyId;
        });
        companies.splice(indexOfCompanyToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CompanyApi;
