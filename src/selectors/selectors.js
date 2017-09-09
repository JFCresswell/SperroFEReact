export function companiesFormattedForDropdown(companies) {
  return companies.map(company => {
    return {
      value: company.Id,
      text: company.Name
    };
  });
}

export function genericFormattedForDropdown(genericList) {
  return genericList.map(genericItem => {
    return {
      value: genericItem.Id,
      text: genericItem.Display
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


