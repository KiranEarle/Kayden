const Builder = require('./Builder')

/**
 * Controller function that determines which adapter to use
 * based on the environment Kayden is being used in.
 * @public
 *
 * @param {Object} config
 *
 * @returns {Promise}
 */

module.exports = function controller(config) {
  // builder sets context of for the adpaters
  const builder = new Builder(config)

  if (typeof XMLHttpRequest !== 'undefined') {
    const XHR = require('./adapters/xhr')
    return XHR.call(builder)
  }

  if (typeof process !== 'undefined' && typeof global !== 'undefined') {
    const HTTP = require('./adapters/http')
    return HTTP.call(builder)
  }

  return null
}
