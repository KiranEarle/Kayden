const controller = require('../controller')
const XHR = require('../adapters/xhr')
const HTTP = require('../adapters/http')

const spyXhr = jest.spyOn(XHR, 'call')

const spyHttp = jest.spyOn(HTTP, 'call')

const testData = {
  url: 'https://jsonplaceholder.typicode.com/users',
  options: {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  },
}

test('front end XHR function called', () => {
  const mockXhr = () => ({
    status: 200,
    readyState: 4
  })

  window.XMLHttpRequest = jest.fn().mockImplementation(mockXhr)

  controller(testData)
  expect(spyXhr).toHaveBeenCalled()
})

test('backend end HTTP function called', () => {
  const mockXhr = () => ({
    status: 200,
    readyState: 4
  })

  window.XMLHttpRequest = undefined

  global = {
    process: {
      env: 'production'
    }
  }

  controller(testData)
  expect(spyHttp).toHaveBeenCalled()
})


test('neither functions were call', () => {
  window.XMLHttpRequest = undefined
  global = undefined
  process = undefined

  expect(controller(testData)).toBe(null)
})