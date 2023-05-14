
const getRangomInt = function (min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError();
  }

  if (min > max) {
    throw new Error('The max value is less than the min');
  }

  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);

  if (maxInt === minInt) {
    return maxInt;
  }

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

export {
  getRangomInt
};
