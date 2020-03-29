# Kayden - (Beta)

## Overview

A light weight promise based request client.

Both XMLHttpRequests for browsers and HTTP for node.js

## Usage

### Get

```
import kayden from 'kayden'

const url = 'https://jsonplaceholder.typicode.com/posts'

const = async () => {
  try {
    const response = await kayden.get(url)
  } catch (e) {
    console.warn(e)
  }
}

```

### Post

```
import kayden from 'kayden'

const url = 'https://jsonplaceholder.typicode.com/posts'
const body = {
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}

const = async () => {
  try {
    const response = await kayden.post(url, body)
  } catch (e) {
    console.warn(e)
  }
}

```
