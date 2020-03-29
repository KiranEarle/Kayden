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
  this.headers = headers
  this.responseType = responseType
}
