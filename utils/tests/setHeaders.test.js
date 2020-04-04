const setHeaders = require('../setHeaders')

const mockXhr = () => ({
  setRequestHeader: jest.fn()
})

const headers = {
  'Content-Type': 'application/json;charset=utf-8'
}

window.XMLHttpRequest = jest.fn().mockImplementation(mockXhr)

const xhr = new window.XMLHttpRequest()

test('testing setHeaders function fires', () => {
  setHeaders(xhr, headers)
  expect(xhr.setRequestHeader).toHaveBeenCalled()
})