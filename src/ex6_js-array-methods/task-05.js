function map(array, callback) {
  const mappedArray = [];

  for (let i = 0; i < array.length; i += 1) {
    mappedArray.push(callback(array[i], i, array));
  }

  return mappedArray;
}

module.exports = map;
