'use strict';

const methods = (iface) => {
  const keys = [];
  Object.keys(iface).forEach((key) => {
    const e = iface[key];
    if (typeof e === 'function') {
      keys.push([e.name, e.length]);
    }
  });
  return keys;
};

module.exports = { methods };
