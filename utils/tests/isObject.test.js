const isObject = require('../isObject')

const obj = {
  'Content-Type': 'application/json;charset=utf-8'
}

test('isObject function should return false', () => {
  expect(isObject('test')).toBe(false)
})

test('isObject function should return true', () => {
  expect(isObject(obj)).toBe(true)
})