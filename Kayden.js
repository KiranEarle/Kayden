const controller = require('./controller')

function Kayden() {}

Kayden.prototype.get = function Get(url, headers) {
  const method = 'GET'
  return controller({ url, headers, method })
}

Kayden.prototype.post = function Post(url, body, headers) {
  const method = 'POST'
  return controller({
    url,
    body,
    headers,
    method,
  })
}

Kayden.prototype.put = function Put(url, body, headers) {
  const method = 'PUT'
  return controller({
    url,
    body,
    headers,
    method,
  })
}

Kayden.prototype.patch = function Patch(url, body, headers) {
  const method = 'PATCH'
  return controller({
    url,
    body,
    headers,
    method,
  })
}

Kayden.prototype.delete = function Delete(url, headers) {
  const method = 'DELETE'
  return controller({ url, headers, method })
}

const kayden = new Kayden()

module.exports = kayden
