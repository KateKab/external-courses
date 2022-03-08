function getPathValue(inputObj, path) {
  let newObj = inputObj;
  const keys = path.split('.');

  for (let i = 0; i < keys.length && newObj; i += 1) {
    newObj = newObj[keys[i]];
  }

  return newObj;
}

module.exports = getPathValue;
