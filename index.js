'use strict'

var isUrl = require('is-url')
var queryString = require('query-string')
var normalizeUrl = require('normalize-url')

module.exports = function getQueryParam(queryParam, url) {
  if (typeof queryParam !== 'string' || typeof url !== 'string') {
    throw new TypeError('get-query-param expected two strings')
  }

  var normalizedUrl = normalizeUrl(url)

  if (!isUrl(normalizedUrl)) {
    return
  }

  var parsed = queryString.parse(normalizedUrl.split('?')[1])

  return parsed[queryParam]
}
