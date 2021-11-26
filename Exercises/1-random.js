'use strict';

const random = (min = 0, max) => {
  let mapped = Math.random() * (max - min);
  let floored = Math.floor(mapped);
  return min + floored;
}

module.exports = { random };
