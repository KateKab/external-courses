function slice(array, begin = 0, end = array.length) {
  const arrayCopy = [];
  let b = begin;
  let e = end;

  if (b < 0) b += array.length;

  if (e < 0) e += array.length;

  if (b < 0) b = 0;

  if (e > array.length) e = array.length;

  if (b < array.length && e > 0 && b < e) {
    for (let i = b; i < e; i += 1) {
      arrayCopy[i - b] = array[i];
    }
  }

  return arrayCopy;
}

module.exports = slice;
