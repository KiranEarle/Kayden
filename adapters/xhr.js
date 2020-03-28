const conclude = require('../utils/conclude')
const setHeaders = require('../utils/setHeaders')
const isObject = require('../utils/isObject')

const xhr = new XMLHttpRequest()

function XHR() {}

XHR.prototype.open = function open() {
  xhr.open(this.method, this.url)
  if (isObject(this.headers)) {
    setHeaders(xhr, this.headers)
  }
}

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
