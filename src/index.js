
exports.min = function min (array) {
  if(array && array.length !== 0) {
    minValue = array[0];
    for(i = 1; i < array.length; i++) {
      if(minValue > array[i])
        minValue = array[i];
    }
    return minValue;
  }
  return 0;
}

exports.max = function max (array) {
  if(array && array.length !== 0) {
    maxValue = array[0];
    for(i = 1; i < array.length; i++) {
      if(maxValue < array[i])
        maxValue = array[i];
    }
    return maxValue;
  }
  return 0;
}

exports.avg = function avg (array) {
  if(array && array.length !== 0) {
    sum = 0;
    for(i = 0; i < array.length; i++)
      sum += array[i];
    return sum / array.length;
  }
  return 0;
}
