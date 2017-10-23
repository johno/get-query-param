'use strict'

var isUrl = require('is-url')
var queryString = require('query-string')
var normalizeUrl = require('normalize-url')

module.exports = function(queryParam, url) {
  if (typeof queryParam !== 'string' || typeof url !== 'string') {
    throw new TypeError('get-query-param expected two strings')
  }

  var fullUrl = /^[\/\?]/.test(url) ? `foo.bar${url}` : url
  var normalizedUrl = normalizeUrl(fullUrl)

  if (!isUrl(normalizedUrl)) { return }

  var parsed = queryString.parse(normalizedUrl.split('?')[1])

  return parsed[queryParam]
}
