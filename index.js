'use strict'

module.exports = function joinUrlElements () {
  var regex = new RegExp('^\\/|\\/$', 'g')
  var args = Array.prototype.slice.call(arguments)
  return args.map(function (element) {
    return element.replace(regex, '')
  }).join('/')
}
