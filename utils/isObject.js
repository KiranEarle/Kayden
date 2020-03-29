/**
 * Validates an object type
 * @public
 *
 * @param {any} value
 *
 * @returns {boolean}
 */
module.exports = function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object
}
