const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let strDNS = domains.map((str) => str.split('.').reverse());
  let domain = [];
  
  strDNS.forEach((matrixstring) => {
    for (let i = 0; i < matrixstring.length; i++) {
      domain.push(matrixstring[i]);
    }
  });
  
  let uniq = domain.map((name) => {
    return {count: 1, name: '.'+name}
  })
  .reduce((a, b) => {
    a[b.name] = (a[b.name] || 0) + b.count;
    return a;
  }, {})
  return(uniq);
}

module.exports = {
  getDNSStats
};
