const http = require('http')
const https = require('https')
const url = require('url')

/**
 * HTTP adapter
 * @class
 */
function HTTP() {}

/**
 * Builds options for the HTTP request
 *
 * @returns {Object}
 */
HTTP.prototype.options = function options() {
  const parsedUrl = url.parse(this.url)
  return {
    host: parsedUrl.host,
    port: parsedUrl.port,
    agent: undefined,
    method: this.method,
    path: parsedUrl.path,
  }
}

/**
 * The initialised function which makes the HTTP request
 * Leverages the context of the builder
 * @returns {Promise}
 */

HTTP.prototype.request = function requestFunction() {
  return new Promise((resolve, reject) => {
    const options = HTTP.prototype.options.call(this)

    let connector = http

    if (options.protocol === 'https') {
      connector = https
    }

    const req = connector
      .request(
        options,
        (res) => {
          const stream = res
          const responseBuffer = []

          stream.on('data', (chunk) => {
            responseBuffer.push(chunk)
          })

          stream.on('end', () => {
            let responseData = Buffer.concat(responseBuffer)
            responseData = responseData.toString('utf8')
            resolve(responseData)
          })
        },
      )

    if (this.method === 'POST') {
      req.write(JSON.stringify((this.body)))
    }

    req.end()
  })
}

module.exports = new HTTP().request
