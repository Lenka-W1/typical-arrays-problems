
exports.min = function min (array) {
  let minDigit = 0;
  if (array == undefined) {
    return 0;
  } else if (array.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < minDigit) {
        minDigit = array[i];
      }
    }
    return minDigit;
  }
}

exports.max = function max (array) {
  let maxDigit = 0;
  if (array == undefined) {
    return 0;
  } else if (array.length < 1){
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maxDigit) {
        maxDigit = array[i];
      }
    }
    return maxDigit;
  }
}

exports.avg = function avg (array) {
  let sum = 0;
  if (array == undefined) {
    return 0;
  } else if (array.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum/array.length;
  }
}
