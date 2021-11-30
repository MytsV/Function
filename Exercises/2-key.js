'use strict';

const generateKey = (length, possible) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const randomValue = Math.random() * (possible.length - 1);
    key += possible[Math.floor(randomValue)];
  }
  return key;
};

module.exports = { generateKey };
