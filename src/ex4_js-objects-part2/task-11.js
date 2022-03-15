function countSigns(inputString) {
  const signs = inputString.split('');
  const signsQuantity = {};

  signs.forEach((element) => {
    if (!signsQuantity[element]) {
      signsQuantity[element] = signs.filter((sign) => sign === element).length;
    }
  });

  Object.keys(signsQuantity).forEach((e) => console.log(`${e} : ${signsQuantity[e]}`));

  return undefined;
}

module.exports = countSigns;
