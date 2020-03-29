const conclude = require('./conclude')

const mockResolveXhr = () => ({
  status: 200,
  readyState: 4
})

const mockPromise = () => ({
  resolve: jest.fn(),
  reject: jest.fn()
})

window.XMLHttpRequest = jest.fn().mockImplementation(mockResolveXhr)

window.Promise = jest.fn().mockImplementation(mockPromise)

const xhrResolve = new window.XMLHttpRequest()

const promise = new window.Promise()

test('conclude call reslove function', () => {
  const { resolve, reject } = promise
  conclude(resolve, reject, { data: 'data'}, xhrResolve)

  expect(resolve).toHaveBeenCalled()
})

const mockRejectXhr = () => ({
  status: 400,
  readyState: 2
})

window.XMLHttpRequest = jest.fn().mockImplementation(mockRejectXhr)

const xhrReject = new window.XMLHttpRequest()

test('conclude call reject function', () => {
  const { resolve, reject } = promise
  conclude(resolve, reject, { data: 'data'}, xhrReject)

  expect(reject).toHaveBeenCalled()
})