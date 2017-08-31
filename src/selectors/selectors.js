export function companiesFormattedForDropdown(companies) {
  return companies.map(company => {
    return {
      value: company.Id,
      text: company.Name
    };
  });
}
