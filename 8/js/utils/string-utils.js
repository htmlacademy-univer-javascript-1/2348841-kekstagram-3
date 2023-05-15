const validateTextLength = function (text, maxLength) {
  if (typeof text !== 'string' || typeof maxLength !== 'number') {
    throw new TypeError();
  }

  if (maxLength < 0) {
    throw new Error('The maxLength value is less than 0');
  }

  const maxLengthInt = Math.floor(maxLength);

  return text.length <= maxLengthInt;
};

export {
  validateTextLength
};
