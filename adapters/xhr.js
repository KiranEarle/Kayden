const conclude = require('../utils/conclude')
const setHeaders = require('../utils/setHeaders')
const isObject = require('../utils/isObject')

/**
 * xhr instance
 */
const xhr = new XMLHttpRequest()

/**
 * XHR adapter
 * @class
 */
function XHR() {}

/**
 * Opens the connection and sets the header for the XMLHttpRequest.
 * Uses the context of the builder.
 */
XHR.prototype.open = function open() {
  xhr.open(this.method, this.url)
  if (isObject(this.headers)) {
    setHeaders(xhr, this.headers)
  }
}

/**
 * The initialised function which makes the XMLHttpRequest request.
 * Leverages the builders context.
 *
 * @returns {Promise}
 */
XHR.prototype.loadState = function load() {
  const body = this.body ? JSON.stringify(this.body) : this.body
  return new Promise((resolve, reject) => {
    XHR.prototype.open.call(this)
    xhr.send(body)
    xhr.onreadystatechange = function loadState() {
      conclude(resolve, reject, xhr.response, xhr)
    }
  })
}

module.exports = new XHR().loadState
