var assert = require('assert')
var getQueryParam = require('..')

describe('get-query-param', function() {

  it('should return a query param when it exists', function() {
    assert.equal(getQueryParam('a', 'http://foobar.com?a=hello'), 'hello')
  })

  it('should return a query param even when there are multiple params', function() {
    assert.equal(getQueryParam('foo', 'http://foobar.com?a=hello&foo=bar&baz=buzz'), 'bar')
  })

  it('should not return a query param when it does not exist', function() {
    assert.equal(getQueryParam('b', 'http://foobar.com?a=hello'), undefined)
  })

  it('should not blow up if there is no query string', function() {
    assert.equal(getQueryParam('b', 'http://foobar.com'), undefined)
  })
})
