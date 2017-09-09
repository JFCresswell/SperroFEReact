import delay from './delay';

const registration =
  {
    Id: 1,
    LastName: "Smith",
    MiddleName: "S",
    FirstName: "Scott",
    UserId: "ssmith",
    Password: "scottpwd",
    DateOfBirth: "11/11/71",
    Street1: "100 Main",
    Street2: "",
    City: "Kansas City",
    State: "MO",
    Zip: "64114",
    GenderId: 2,
    EducationLevelId: 3,
    IncomeRangeId: 7,
    HouseholdSizeId: 2,
    HouseholdIncomeId: 9,
    MaritalStatusId: 1,
    LivingSituationId: 0
  };

class RegistrationApi {
  static getRegistration() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, registration));
      }, delay);
    });
  }

  static saveRegistration(registrationData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve(Object.assign({}, registrationData));
      }, delay);
    });
  }
}

export default RegistrationApi;
