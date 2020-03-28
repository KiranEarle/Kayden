const Builder = require('./Builder')

module.exports = function controller(config) {
  const builder = new Builder(config)
  console.log('Hello world')

  if (typeof XMLHttpRequest !== 'undefined') {
    const XHR = require('./adapters/xhr')
    console.log(XHR)
    return XHR.call(builder)
  }

  if (typeof process !== 'undefined' && typeof global !== 'undefined') {
    const HTTP = require('./adapters/http')
    return HTTP.call(builder)
  }

  return null
}
