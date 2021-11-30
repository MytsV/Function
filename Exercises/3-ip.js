'use strict';

const ipToInt = (ip = '127.0.0.1') => ip.split('.')
  .reduce((previous, current) => (previous << 8) + parseInt(current), 0);

module.exports = { ipToInt };
