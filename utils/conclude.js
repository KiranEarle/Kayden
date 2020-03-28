module.exports = function conclude(resolve, reject, response, xhr) {
  const { status, readyState } = xhr
  if (readyState === 2) {
    if (status === 404) {
      reject(new Error(`Request failed with a code ${status}`))
    }
  }

  if (readyState === 4) {
    if (status !== 404) {
      resolve(response)
    }
  }
}
