module.exports = function Builder({
  url,
  method = null,
  body = null,
  headers = null,
  responseType = 'json',
}) {
  this.url = url
  this.method = method
  this.body = body
  this.headers = headers
  this.responseType = responseType
}
