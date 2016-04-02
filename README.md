# join-uri
Lightweight Javascript ultility for joining url with no dependencies

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
