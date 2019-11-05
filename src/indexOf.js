function indexOf(array, searchElement, fromIndex) {
  if (Array.isArray(array)) {
    // default value
    let startingIndex = 0;
    if (fromIndex) {
      fromIndex = parseInt(fromIndex);
      // check if it's NaN
      if (fromIndex !== fromIndex) {
        startingIndex = 0;
      } else {
        startingIndex = fromIndex;
      }
    }
    let returnedValue;
    if (fromIndex >= array.length) {
      return -1;
    }
    for (let i = startingIndex; i < array.length; i++) {
      if (array[i] === searchElement) {
        returnedValue = i;
        return returnedValue;
      }
    }
    return -1;
  } else {
    throw new TypeError("First argument should be an array");
  }
}

export default indexOf;
