const symbol = require('symbol')

const SEEKS = symbol('@@interopjs/seeks')

module.exports = function seeks(name) {
  return function (selector) {
    const _seeks = global[SEEKS]
    if (!_seeks) return
    return _seeks(name, selector)
  }
}
module.exports.default = module.exports
module.exports.symbol = SEEKS
