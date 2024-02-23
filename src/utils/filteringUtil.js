export const filterData = (data, filterBy, searchTerm) => {
  if (!filterBy || !searchTerm) {
    return data;
  }

  return data.filter((item) => {
    const fieldValue = item[filterBy];

    if (typeof fieldValue === "string") {
      // If the value is a string, perform a case-insensitive search
      return fieldValue.toLowerCase().startsWith(searchTerm.toLowerCase());
    } else if (typeof fieldValue === "number") {
      // If the value is a number, convert it to a string and then perform the search
      return fieldValue.toString().startsWith(searchTerm);
    }

    // no matchx
    return false;
  });
};
