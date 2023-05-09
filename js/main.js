
function getRangomInt(min, max) {
  if(typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError();
  }

  if(min > max) {
    throw new Error('The max value is less than the min');
  }

  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);

  if (maxInt === minInt) {
    return maxInt;
  }

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

function validateTextLength(text, maxLength) {
  if(typeof text !== 'string' || typeof maxLength !== 'number') {
    throw new TypeError();
  }

  if(maxLength < 0) {
    throw new Error('The maxLength value is less than 0');
  }

  const maxLengthInt = Math.floor(maxLength);

  return text.length <= maxLengthInt;
}
