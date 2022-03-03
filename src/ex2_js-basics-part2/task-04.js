function checkEqual(arrayToCheck) {
  const uniqueSet = new Set(arrayToCheck);

  if (uniqueSet.size === 1) {
    return true;
  }

  return false;
}

module.exports = checkEqual;
