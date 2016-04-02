# join-uri
Lightweight Javascript ultility for joining url with no dependencies

[![Build Status](https://img.shields.io/travis/thangngoc89/join-uri/master.svg?style=flat-square)](https://travis-ci.org/thangngoc89/join-uri)
[![Test Coverage](https://img.shields.io/codecov/c/github/thangngoc89/join-uri/master.svg?style=flat-square)](https://codecov.io/github/thangngoc89/join-uri?branch=master)
[![Latest Stable Version](https://img.shields.io/npm/v/join-uri.svg?style=flat-square)](https://www.npmjs.com/package/join-uri)

# Install

```console
npm install -S join-uri
```

# Usage

```js
var joinUri = require("join-uri")

// Normal join
joinUri("foo", "bar") // -> foo/bar

// Ensure surrounding slashes
joinUrl("/", "foo/", "/bar", "/") // -> /foo/bar/
```

# LICENSE

MIT
