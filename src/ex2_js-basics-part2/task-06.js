function checkPrime(valueToCheck) {
  let checkResult = 'Данные неверны';

  if (valueToCheck <= 1000) {
    if (valueToCheck > 1) {
      for (let i = 2; i < valueToCheck; i += 1) {
        if (valueToCheck % i === 0) {
          checkResult = `Число ${valueToCheck} - составное число`;
          break;
        }

        checkResult = `Число ${valueToCheck} - простое число`;
        break;
      }
    } else checkResult = 'Не причисляется ни к простым, ни к составным числам';
  }

  console.log(checkResult);

  return checkResult;
}

module.exports = checkPrime;
