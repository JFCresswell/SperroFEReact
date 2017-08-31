import expect from 'expect';
import {companiesFormattedForDropdown} from './selectors';

describe('Companies Selectors', () => {
  describe('companiesFormattedForDropdown', () => {
    it('should return company data formatted for use in a dropdown', () => {
      const companies = [
        {Id: 1, Name: 'Microsoft', Location: 'Redmond, WA'},
        {Id: 2, Name: 'Apple', Location: 'Cupertino, CA'}
      ];

      const expected = [
        {value: 1, text: 'Microsoft'},
        {value: 2, text: 'Apple'}
      ];

      expect(companiesFormattedForDropdown(companies)).toEqual(expected);
    });
  });
});
