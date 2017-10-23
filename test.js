import test from 'ava'
import getQueryParam from './'

test('returns a query param when it exists', t => {
  const result = getQueryParam('a', 'http://foobar.com?a=hello')

  t.is(result, 'hello')
})

test('returns a query param even when there are multiple params', t => {
  const result = getQueryParam('foo', 'http://foobar.com?a=hello&foo=bar&baz=buzz')

  t.is(result, 'bar')
})

test('returns a query param when a relative path is passed', t => {
  const result = getQueryParam('foo', '/qux?a=hello&foo=bar&baz=buzz')

  t.is(result, 'bar')
})

test('returns a query param when window.location.search is passed', t => {
  const result = getQueryParam('foo', '?a=hello&foo=bar&baz=buzz')

  t.is(result, 'bar')
})

test('returns a falsy value when the query param does not exist', t => {
  const result = getQueryParam('b', 'http://foobar.com?a=hello')

  t.falsy(result)
})

test('does not throw without a query string', t => {
  const fn = () => getQueryParam('b', 'http://foobar.com')

  t.notThrows(fn)
})
