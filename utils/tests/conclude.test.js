const conclude = require('../conclude')

const mockPromise = () => ({
  resolve: jest.fn(),
  reject: jest.fn()
})

window.Promise = jest.fn().mockImplementation(mockPromise)


test('conclude call reslove function', () => {
  const promise = new window.Promise()

  const mockResolveXhr = () => ({
    status: 200,
    readyState: 4
  })
  window.XMLHttpRequest = jest.fn().mockImplementation(mockResolveXhr)

  const xhrResolve = new window.XMLHttpRequest()
  const { resolve, reject } = promise
  conclude(resolve, reject, { data: 'data'}, xhrResolve)

  expect(resolve).toHaveBeenCalled()
})


test('conclude not to call reslove function', () => {
  const promise = new window.Promise()
  const mockResolveXhr = () => ({
    status: 404,
    readyState: 4
  })
  window.XMLHttpRequest = jest.fn().mockImplementation(mockResolveXhr)

  const xhrNotResolve = new window.XMLHttpRequest()
  const { resolve, reject } = promise
  conclude(resolve, reject, { data: 'data'}, xhrNotResolve)

  expect(resolve).not.toHaveBeenCalled()
})



test('conclude call reject function', () => {
  const promise = new window.Promise()
  let mockRejectXhr = () => ({
    status: 404,
    readyState: 2
  })
  window.XMLHttpRequest = jest.fn().mockImplementation(mockRejectXhr)

  const xhrReject = new window.XMLHttpRequest()
  const { resolve, reject } = promise
  conclude(resolve, reject, { data: 'data'}, xhrReject)

  expect(reject).toHaveBeenCalled()
})



test('conclude not to call reject function', () => {
  const promise = new window.Promise()
  const mockRejectXhr = () => ({
    status: 201,
    readyState: 2
  })
  window.XMLHttpRequest = jest.fn().mockImplementation(mockRejectXhr)

  const xhrNotReject = new window.XMLHttpRequest()
  const { resolve, reject } = promise
  conclude(resolve, reject, { data: 'data'}, xhrNotReject)

  expect(reject).not.toHaveBeenCalled()
})