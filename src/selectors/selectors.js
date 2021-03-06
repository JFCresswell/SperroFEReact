export function companiesFormattedForDropdown(companies) {
  return companies.map(company => {
    return {
      value: company.Id,
      text: company.Name
    };
  });
}

export function sponsorsFormattedForDropdown(sponsors) {
  return sponsors.map(sponsor => {
    return {
      value: sponsor.Id,
      text: sponsor.CompanyName
    };
  });
}

export function genericFormattedForDropdown(genericList) {
  return genericList.map(genericItem => {
    return {
      value: genericItem.id,
      text: genericItem.display
    };
  });
}

export function numericRangeOpenFormattedForDropdown(low, high) {
  let list = [];
  let idx = 0;
  for (let id = low; id <= high; id++)
  {
    let idText = id === high ? id.toString() + ' or higher' : id.toString();
    list.push({value: idx, text: idText});

    ++idx;
  }
  return list;
}


