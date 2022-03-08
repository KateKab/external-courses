function deepClone(inputObj) {
  const clonedObj = {};
  const keys = Object.keys(inputObj);

  keys.forEach((key) => {
    if (typeof inputObj[key] === 'object') {
      if (Array.isArray(inputObj[key])) {
        clonedObj[key] = inputObj[key].map((a) => deepClone(a));
      } else clonedObj[key] = deepClone(inputObj[key]);
    } else clonedObj[key] = inputObj[key];
  });

  return clonedObj;
}

module.exports = deepClone;
