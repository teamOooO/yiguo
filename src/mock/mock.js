var homeAllData = require('./homedata.json')
var classify = require('./classify.json')
var detail = require('./detail.json')

module.exports = function() {
  return {
    "homedata": homeAllData,
    "classify": classify,
    "detail": detail
  }
}
