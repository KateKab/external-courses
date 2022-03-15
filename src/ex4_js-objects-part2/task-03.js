function deleteSpace(inputString) {
  const exp = /(^\s)|(\s$)/gim;

  return inputString.replace(exp, '');
}

module.exports = deleteSpace;
