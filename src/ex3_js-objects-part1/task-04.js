function addPropToObj(stringToCheck, inputObject) {
  const newObj = inputObject;

  if (!inputObject.hasOwnProperty(stringToCheck)) {
    newObj[stringToCheck] = 'new';
  }

  return newObj;
}

module.exports = addPropToObj;
