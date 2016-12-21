'use strict'

const isUrl = require('is-url')
const queryString = require('query-string')
const normalizeUrl = require('normalize-url')

module.exports = (queryParam, url) => {
  if (typeof queryParam !== 'string' || typeof url !== 'string') {
    throw new TypeError('get-query-param expected two strings')
  }

  const fullUrl = /^\//.test(url) ? `foo.bar${url}` : url
  const normalizedUrl = normalizeUrl(fullUrl)

  if (!isUrl(normalizedUrl)) { return }

  const parsed = queryString.parse(normalizedUrl.split('?')[1])

  return parsed[queryParam]
}
