function checkPrime(valueToCheck) {
  if (valueToCheck > 1000) {
    return 'Данные неверны';
  }

  if (valueToCheck === 1 || valueToCheck === 0) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }

  for (let i = 2; i <= valueToCheck / 2; i += 1) {
    if (valueToCheck % i === 0) {
      return `Число ${valueToCheck} - составное число`;
    }
  }

  return `Число ${valueToCheck} - простое число`;
}

module.exports = checkPrime;
