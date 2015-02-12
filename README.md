# get-query-param [![Build Status](https://secure.travis-ci.org/johnotander/get-query-param.png?branch=master)](https://travis-ci.org/johnotander/get-query-param)

Get a particular query param from a url.

## Installation

```bash
npm install --save get-query-param
```

## Usage

```javascript
var getQueryParam = require('get-query-param');

getQueryParam('a', 'https://foo.bar?a=hello');  // => 'hello'
getQueryParam('b', 'https://foo.bar?a=hello');  // => undefined
getQueryParam('b', 'https://foo.bar');          // => undefined
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
