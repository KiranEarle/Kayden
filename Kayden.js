const controller = require('./controller')
/**
 * Kayden class http request
 * @class
 */
function Kayden() {}

/**
 * Kayden get method
 * @public
 *
 * @param {string} url
 * @param {Object} options
 *
 * @returns {Promise}
 */
Kayden.prototype.get = function Get(url, options) {
  const method = 'GET'
  return controller({ url, options, method })
}

/**
 * Kayden post method
 * @public
 *
 * @param {string} url
 * @param {Object} body
 * @param {Object} options
 *
 * @returns {Promise}
 */
Kayden.prototype.post = function Post(url, body, options) {
  const method = 'POST'
  return controller({
    url,
    body,
    options,
    method,
  })
}

/**
 * Kayden put method
 * @public
 *
 * @param {string} url
 * @param {Object} body
 * @param {Object} options
 *
 * @returns {Promise}
 */
Kayden.prototype.put = function Put(url, body, options) {
  const method = 'PUT'
  return controller({
    url,
    body,
    options,
    method,
  })
}

/**
 * Kayden patch method
 * @public
 *
 * @param {string} url
 * @param {Object} body
 * @param {Object} options
 *
 * @returns {Promise}
 */
Kayden.prototype.patch = function Patch(url, body, options) {
  const method = 'PATCH'
  return controller({
    url,
    body,
    options,
    method,
  })
}

/**
 * Kayden delete method
 * @public
 *
 * @param {string} url
 * @param {Object} options
 *
 * @returns {Promise}
 */
Kayden.prototype.delete = function Delete(url, options) {
  const method = 'DELETE'
  return controller({ url, options, method })
}

const kayden = new Kayden()

module.exports = kayden
