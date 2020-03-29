const controller = require('./controller')
/**
 * Kayden class
 */
function Kayden() {}

Kayden.prototype.get = function Get(url, options) {
  const method = 'GET'
  return controller({ url, options, method })
}

Kayden.prototype.post = function Post(url, body, options) {
  const method = 'POST'
  return controller({
    url,
    body,
    options,
    method,
  })
}

Kayden.prototype.put = function Put(url, body, options) {
  const method = 'PUT'
  return controller({
    url,
    body,
    options,
    method,
  })
}

Kayden.prototype.patch = function Patch(url, body, options) {
  const method = 'PATCH'
  return controller({
    url,
    body,
    options,
    method,
  })
}

Kayden.prototype.delete = function Delete(url, options) {
  const method = 'DELETE'
  return controller({ url, options, method })
}

const kayden = new Kayden()

module.exports = kayden
