/**
 * Builder class that creates context for
 * either the XHR or HTTP class functions
 * @class
 *
 * @param {string} url
 * @param {string} method
 * @param {Object} body
 * @param {Object} options
 */

module.exports = function Builder({
  url,
  method = null,
  body = null,
  options = {
    headers: null,
    responseType: 'json',
  }
}) {
  this.url = url
  this.method = method
  this.body = body
  this.options = options
  this.headers = options.headers
  this.responseType = options.responseType
}
