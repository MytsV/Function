'use strict';

const random = (min = 0, max = min) => {
  let mapped = Math.random() * (max - min + 1);
  let floored = Math.floor(mapped);
  return min + floored;
}

module.exports = { random };
