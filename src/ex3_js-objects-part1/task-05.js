function copyObject(inputObject) {
  const newObj = {};

  return Object.assign(newObj, inputObject);
}

module.exports = copyObject;
