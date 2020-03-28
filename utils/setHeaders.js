module.exports = function setHeaders(xhr, headers) {
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value)
  })
}
