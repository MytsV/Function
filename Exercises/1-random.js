'use strict';

const random = (min = 0, max = min) => {
  const mapped = Math.random() * (max - min + 1);
  const floored = Math.floor(mapped);
  return min + floored;
};

module.exports = { random };
