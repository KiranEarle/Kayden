# Kayden - (Beta)

## Overview

A light weight promise based request client.

Both XMLHttpRequests for browsers and HTTP for node.js

## Usage

### Get

```javascript
import kayden from 'kayden'

const url = 'https://jsonplaceholder.typicode.com/posts'

const data = async () => {
  try {
    const response = await kayden.get(url)
    return response
  } catch (e) {
    console.warn(e)
  }
}
```

### Post

```javascript
import kayden from 'kayden'
const config = {
  url: 'https://jsonplaceholder.typicode.com/posts',
  body: {
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1
  },
}

const data = async () => {
  try {
    const response = await kayden.post(config.url, config.body)
    return response
  } catch (e) {
    console.warn(e)
  }
}

```
### .then().catch() syntax

```javascript
import kayden from 'kayden'

  kayden.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.warn(e)
  })
}

```
