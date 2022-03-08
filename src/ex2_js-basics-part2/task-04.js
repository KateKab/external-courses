function checkEqual(arrayToCheck) {
  const uniqueSet = new Set(arrayToCheck);

  return uniqueSet.size === 1;
}

module.exports = checkEqual;
