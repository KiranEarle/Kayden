const Builder = require('../Builder')

const testData = {
  url: 'https://www.test-website.com/users',
  method: 'POST',
  body: {
    someData: 'someData'
  },
  options: {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    responseType: 'json',
  }
}

const testResponse = {
  url: 'https://www.test-website.com/users',
  method: 'POST',
  body: {
    someData: 'someData'
  },
  options: {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    responseType: 'json',
  },
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  responseType: 'json',
}


test('check all fields in Builder', () => {
  expect(new Builder(testData)).toEqual(testResponse)
})

const testGet = {
  url: 'https://www.test-website.com/users',
}

const testAlt = {
  url: 'https://www.test-website.com/users',
  method: null,
  body: null,
  options: {
    headers: null,
    responseType: 'json'
  },
  headers: null,
  responseType: 'json'
}

test('check other outcome fields in Builder', () => {
  expect(new Builder(testGet)).toEqual(testAlt)
})