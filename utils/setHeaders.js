/**
 * Sets headers to the xhr object, will extend to HTTP
 * in newer iteration.
 * @public
 *
 * @param {Object} xhr
 * @param {Object} headers
 *
 * @returns {void}
 */

module.exports = function setHeaders(xhr, headers) {
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value)
  })
}
